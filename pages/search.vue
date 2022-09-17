<template>
<div>
  <h2>Search results for: <em>{{ query}}</em></h2>
  <div class="row">
    <div v-for="book in books" class="col-md-3  ">
      <BookCard :key="book.isbn13" :isbn13="book.isbn13" :image="book.image"/>
    </div>
  </div>
  <b-pagination v-model="page" pills @change="onPageChange" :total-rows="total"></b-pagination>
</div>
</template>

<script>
import BookCard from "@/components/Book/BookCard";
export default {
  components: {BookCard},
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

  watch: {
    query() {
    }
  },

  created() {
    this.$watch(
      () => this.$route.query,
      (newParams) => {
        const {query} = newParams;

        this.fetchBooks(query, 1);
      }
    )
  },

  methods: {
    async fetchBooks(query, currentPage) {
      const {books, error, page, total} = await this
        .$axios
        .$get(`/search/${query}/${currentPage}`);

      this.query = query;
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
