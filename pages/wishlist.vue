<template>
  <div>
    <div class="container wishlist-page">
      <div class="empty d-flex flex-column align-content-center" v-if="myWishList.length === 0">
        <b-alert variant="primary" show>There is nothing here now. Please
          <NuxtLink to="/">choose a book</NuxtLink>
          .
        </b-alert>
      </div>
      <div class="row my-2" v-else>
        <div class="col-md-4" v-for="book in myWishList">
          <BookCard
            :title="book.title"
            :subtitle="book.subtitle"
            :isbn13="book.isbn13"
            :image="book.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wishlist",
  layout: 'index',

  computed: {
    myWishList() {
      return this.$store.state.wishList.items;
    }
  }
}
</script>

<style scoped lang="scss">
.empty {
  padding-top: 60px;
  height: 100%;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}

.container {
  min-height: 40vh;
}

.alert {
  font-size: 40px;
  width: 100%;
  display: block;
  text-align: center;
}
</style>
