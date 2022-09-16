<template>
  <div>
    <div class="container">
      <div class="row my-2">
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
