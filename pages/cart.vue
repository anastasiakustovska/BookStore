<template>
  <div class="cart--wrapper">
    <h1 class="text-primary text-center my-5">
      Cart
    </h1>
    <div>
      <div class="row">
        <div class="col-md-8 col-sm-12">
          <b-card
            v-for="(item, $index) in cartItems"
            :key="item.isbn13"
            no-body
            class="overflow-hidden my-2"
            style="max-width: 540px;"
          >
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img :src="item.image" :alt="item.title" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body class="cart-item--body">
                  <b-button variant="transparent" class="cart-item--body__delete-btn" @click="onDeleteClick($index)">
                    &times;
                  </b-button>
                  <NuxtLink :to="`/books/${item.isbn13}`">
                    <b-card-title>
                      {{ item.title }}
                    </b-card-title>
                  </NuxtLink>
                  <b-card-text>
                    <div class="quantity">
                      <b>Quantity:</b>
                      <b-form-input :class="'quantity--input'" min="1" @input="(e) => {onQuantityChange(e, item)}"
                                    :value="item.quantity ?? 1" type="number"></b-form-input>
                    </div>
                    <p><b>Price:</b> {{ item.price }} </p>
                    <p><b>Subtotal:</b> ${{ getItemSubtotal(item) }}</p>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
        <div class="col-md-4 col-sm-12 mb-5">
          <b-card>
            <b-card-header>
              Summary
            </b-card-header>
            <b-card-body>
              <div v-for="(item, $index) in cartItems">
                <span>{{ item.title }}: ${{ getItemSubtotal(item) }}</span>
              </div>

              <hr>
              Sum: {{ cartPrice }}
            </b-card-body>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {priceToNumber} from "@/utils/functions/price";

export default {
  name: "cart",
  layout: 'index',

  mounted() {
    if (this.cartItems.length === 0) {
      this.$router.push('/');
    }
  },
  computed: {
    cartItems() {
      return this.$store.state.cart.items;
    },
    cartPrice() {
      return this.getCartPrice();
    }
  },
  methods: {
    ...mapGetters(({
      getCartPrice: 'cart/countAllSum',
    })),
    onQuantityChange(quantity, item) {
      this.$store.commit('cart/changeProductQuantity', {isbn: item.isbn13, quantity});
    },

    onDeleteClick(index) {
      this.$store.commit('cart/removeFromCart', {index});
    },

    getItemSubtotal({price, quantity}) {
      quantity = quantity ?? 1;

      return (priceToNumber(price) * quantity).toFixed(2);
    }
  }
}
</script>

<style scoped lang="scss">
.quantity {
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 10px;
}

.quantity--input {
  width: 70px !important;
}

.cart--wrapper {
  min-height: 60vh;
}

.cart {
  &-item {
    &--body {
      position: relative;

      &__delete-btn {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
}
</style>
