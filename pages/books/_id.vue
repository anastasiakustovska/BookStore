<template>
  <div>
    <div class="container">
      <div class="product-content product-wrap clearfix product-deatil">
        <div class="row">
          <div class="col-md-5 col-sm-12 col-xs-12">
            <div class="product-image">
              <img :src="book.image" :alt="book.title">
            </div>
          </div>

          <div class="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
            <h2 class="name">
              {{ book.title }}
            </h2>
            <h2>
              {{ book.subtitle }}
            </h2>
            <a href="javascript:void(0);">109 customer reviews</a>
            <b-input-group>
              <b-input-group-prepend>
                <b-button class="bg-primary border-primary" @click="onRatingClear">Clear</b-button>
              </b-input-group-prepend>
              <b-form-rating v-model="rating" class="text-primary"></b-form-rating>
              <b-input-group-append>
                <b-input-group-text class="justify-content-center" style="min-width: 3em;">
                  {{ rating }}
                </b-input-group-text>
              </b-input-group-append>
            </b-input-group>
            <hr/>
            <h3 class="price-container">
              {{ book.price }}
              <small>*includes tax</small>
            </h3>
            <div class="certified">
              <ul>
                <li>
                  <a href="javascript:void(0);">Delivery time<span>7 Working Days</span></a>
                </li>
                <li>
                  <a href="javascript:void(0);">Certified<span>Quality Assured</span></a>
                </li>
              </ul>
            </div>
            <hr/>
            <div>
              {{ book.authors }}
            </div>
            <div>
              {{ book.language }}
            </div>
            <div>
              {{ book.pages }}
            </div>
            <div>
              {{ book.year }}
            </div>
            <div class="description description-tabs">
              <div>
                <b-card no-body>
                  <b-tabs card>
                    <b-tab title="Description" active>
                      <b-card-text>{{ book.desc }}</b-card-text>
                    </b-tab>
                    <b-tab title="Details">
                      <b-card-text>
                        <b-list-group>
                          <b-list-group-item><b>Pages:</b> {{ book.pages}}</b-list-group-item>
                          <b-list-group-item><b>Year:</b> {{ book.year}}</b-list-group-item>
                          <b-list-group-item>Morbi leo risus</b-list-group-item>
                          <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
                          <b-list-group-item>Vestibulum at eros</b-list-group-item>
                        </b-list-group>
                      </b-card-text>
                    </b-tab>
                  </b-tabs>
                </b-card>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <b-btn class="btn btn-success btn-lg">Add to cart ($129.54)</b-btn>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6">
                <div class="btn-group pull-right">
                    <b-button variant="primary" @click="onWishListButtonClick">
                      <font-awesome-icon :icon="['fa', `${!isInWishList ? 'fa-heart' : 'fa-heart-circle-xmark'}`]" swap-opacity/>
                    </b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "Book",
  layout: 'index',

  data() {
    return {
      rating: 0,
      book: {},
    }
  },

  computed: {
    auth() {
      return this.$store.state.auth;
    },

    isInWishList() {
      const allIds = this.getAllIds();

      return allIds.includes(this.book.isbn13);
    }
  },

  methods: {
    onRatingClear() {
      this.rating = 0;
    },
    onWishListButtonClick() {
      !this.isInWishList ? this.onWishListAdd() : this.onWishListRemove();
    },
    onWishListAdd() {
      this.$store.commit('wishList/addToList', this.book);
    },
    onWishListRemove() {
      this.$store.commit('wishList/removeFromList', this.book);
    },
    ...mapGetters({
      getAllIds: 'wishList/getAllItemIds',
    })
  },

  mounted() {
    const {id} = this.$route.params;

    this
      .$axios
      .$get(`/books/${parseInt(id)}`)
      .then(response => {
        this.book = response;
      });

  },

  async asyncData({params}) {
    const id = params.id

    return {id}
  }
}
</script>

<style scoped lang="scss">
body {
  margin-top: 20px;
  background: #eee;
}

.product-content {
  border: 1px solid #dfe5e9;
  margin-bottom: 20px;
  margin-top: 12px;
  background: #fff;

  .carousel-control.left {
    margin-left: 0;
  }

  .product-image {
    background-color: #fff;
    display: block;
    min-height: 238px;
    overflow: hidden;
    position: relative;
  }

  .product-deatil {
    border-bottom: 1px solid #dfe5e9;
    padding-bottom: 17px;
    padding-left: 16px;
    padding-top: 16px;
    position: relative;
    background: #fff;

    h5 {
      a {
        color: #2f383d;
        font-size: 15px;
        line-height: 19px;
        text-decoration: none;
        padding-left: 0;
        margin-left: 0;

        span {
          color: #9aa7af;
          display: block;
          font-size: 13px;
        }
      }
    }

    span.tag1 {
      border-radius: 50%;
      color: #fff;
      font-size: 15px;
      height: 50px;
      padding: 13px 0;
      position: absolute;
      right: 10px;
      text-align: center;
      top: 10px;
      width: 50px;
    }

    span.sale {
      background-color: #21c2f8;
    }

    span.discount {
      background-color: #71e134;
    }

    span.hot {
      background-color: #fa9442;
    }

    p.price-container {
      span {
        color: #21c2f8;
        font-family: Lato, sans-serif;
        font-size: 24px;
        line-height: 20px;
      }
    }
  }

  .description {
    font-size: 12.5px;
    line-height: 20px;
    padding: 10px 14px 16px 19px;
    background: #fff;
  }

  .product-info {
    padding: 11px 19px 10px 20px;

    a.add-to-cart {
      color: #2f383d;
      font-size: 13px;
      padding-left: 16px;
    }
  }

  name.a {
    padding: 5px 10px;
    margin-left: 16px;
  }
}

.product-info.smart-form {
  .btn {
    padding: 6px 12px;
    margin-left: 12px;
    margin-top: -10px;
  }

  .rating {
    label {
      margin-top: 0;
    }
  }
}

.product-entry {
  .product-deatil {
    border-bottom: 1px solid #dfe5e9;
    padding-bottom: 17px;
    padding-left: 16px;
    padding-top: 16px;
    position: relative;

    h5 {
      a {
        color: #2f383d;
        font-size: 15px;
        line-height: 19px;
        text-decoration: none;

        span {
          color: #9aa7af;
          display: block;
          font-size: 13px;
        }
      }
    }

    p.price-container {
      span {
        color: #21c2f8;
        font-family: Lato, sans-serif;
        font-size: 24px;
        line-height: 20px;
      }
    }
  }
}

.load-more-btn {
  background-color: #21c2f8;
  border-bottom: 2px solid #037ca5;
  border-radius: 2px;
  border-top: 2px solid #0cf;
  margin-top: 20px;
  padding: 9px 0;
  width: 100%;
}

.product-block {
  .product-deatil {
    p.price-container {
      span {
        color: #21c2f8;
        font-family: Lato, sans-serif;
        font-size: 24px;
        line-height: 20px;
      }
    }
  }
}

.shipping {
  table {
    tbody {
      tr {
        td {
          p.price-container {
            span {
              color: #21c2f8;
              font-family: Lato, sans-serif;
              font-size: 24px;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
}

.shopping-items {
  table {
    tbody {
      tr {
        td {
          p.price-container {
            span {
              color: #21c2f8;
              font-family: Lato, sans-serif;
              font-size: 24px;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
}

.product-wrap {
  .product-image {
    span.tag2 {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      padding: 10px 0;
      color: #fff;
      font-size: 11px;
      text-align: center;
    }

    span.sale {
      background-color: #57889c;
    }

    span.hot {
      background-color: #a90329;
    }
  }
}

.shop-btn {
  position: relative;

  > span {
    background: #a90329;
    display: inline-block;
    font-size: 10px;
    box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1), inset 0 -1px 0 rgba(0, 0, 0, .07);
    font-weight: 700;
    border-radius: 50%;
    padding: 2px 4px 3px !important;
    text-align: center;
    line-height: normal;
    width: 19px;
    top: -7px;
    left: -7px;
  }
}

.description-tabs {
  padding: 30px 0 5px !important;

  .tab-content {
    padding: 10px 0;
  }
}

.product-deatil {
  padding: 30px 30px 50px;

  hr + .description-tabs {
    padding: 0 0 5px !important;
  }

  .carousel-control.left {
    background: none !important;
  }

  .carousel-control.right {
    background: none !important;
  }

  .glyphicon {
    color: #3276b1;
  }

  .product-image {
    border-right: none !important;
  }

  .name {
    margin-top: 0;
    margin-bottom: 0;

    small {
      display: block;
    }

    a {
      margin-left: 0;
    }
  }

  .price-container {
    font-size: 24px;
    margin: 0;
    font-weight: 300;

    small {
      font-size: 12px;
    }
  }

  .fa-2x {
    font-size: 16px !important;

    > h5 {
      font-size: 12px;
      margin: 0;
    }
  }

  .fa-2x + a {
    font-size: 13px;
  }

  .fa-2x + a + a {
    font-size: 13px;
  }

  .certified {
    margin-top: 10px;

    ul {
      padding-left: 0;

      li {
        &:not(first-child) {
          margin-left: -3px;
        }

        display: inline-block;
        background-color: #f9f9f9;
        border: 1px solid #ccc;
        padding: 13px 19px;

        &:first-child {
          border-right: none;
        }

        a {
          text-align: left;
          font-size: 12px;
          color: #6d7a83;
          line-height: 16px;
          text-decoration: none;

          span {
            display: block;
            color: #21c2f8;
            font-size: 13px;
            font-weight: 700;
            text-align: center;
          }
        }
      }
    }
  }

  .message-text {
    width: calc(100% - 70px);
  }
}

.profile-message {
  ul {
    list-style: none;
  }
}

.message {
  img.online {
    width: 40px;
    height: 40px;
  }
}

@media only screen and (min-width: 1024px) {
  .product-content {
    div[class*=col-md-4] {
      padding-right: 0;
    }

    div[class*=col-md-8] {
      padding: 0 13px 0 0;
    }

    .product-image {
      border-right: 1px solid #dfe5e9;
    }

    .product-info {
      position: relative;
    }
  }
  .product-wrap {
    div[class*=col-md-5] {
      padding-right: 0;
    }

    div[class*=col-md-7] {
      padding: 0 13px 0 0;
    }
  }
}
</style>
