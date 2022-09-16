<template>
<div>
  <b-pagination v-model="page" pills @change="onPageChange" :total-rows="total"></b-pagination>
</div>
</template>

<script>
export default {
  layout: 'index',
  name: "search",
  data() {
    return {
      page: 1,
      total: 0,
      books: [],
      query: '',
    }
  },

  methods: {
    async fetchBooks(query, currentPage) {
      const {books, error, page, total} = await this
        .$axios
        .$get(`/search/${query}/${currentPage}`);

      this.books = books;
      this.page = parseInt(page);
      this.total = parseInt(total);
    },

    onPageChange(page) {
      this.fetchBooks(this.query, page);
    }
  },

  mounted() {
    const {query} = this.$route.query;
    this.query = query;

    this.fetchBooks(this.query, this.page);
  }
  //
  //
  // },
}
</script>

<style scoped>

</style>
