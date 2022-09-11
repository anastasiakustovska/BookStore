<template>
  <div>
    <img :src="book.image" alt="">
    {{ book }}
  </div>
</template>

<script>
export default {
  name: "Book",
  layout: 'index',

  data() {
    return {
      book: {},
    }
  },

  mounted() {
    const {id} = this.$route.params;

    this.$axios.$get('/books/'+parseInt(id)).then(response => {
      this.book = response;
    });

  },

  async asyncData({ params }) {
    const id = params.id

    return { id }
  }
}
</script>

<style scoped>

</style>
