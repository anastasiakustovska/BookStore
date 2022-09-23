<template>
  <div class="search--wrapper">
    <div v-if="books.length">
      <h2 class="text-primary my-5 text-center">Search results for: <em>{{ query }}</em></h2>
      <div class="row justify-content-center my-5">
        <BookCard v-for="book in books" class="col-lg-2 col-md-6 col-sm-12" :key="book.isbn13" :title="book.title"
                  :isbn13="book.isbn13" :image="book.image"/>
      </div>
      <div class="d-flex justify-content-center" v-if="total > 10">
        <b-pagination v-model="page" :per-page="10" pills @change="onPageChange" :total-rows="total"></b-pagination>
      </div>
    </div>
    <div v-else>
      <h2 class="text-primary text-center mt-5">Nothing found for: <em>{{ query }}</em></h2>
    </div>
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
}
</script>

<style scoped>
.row {
  gap: 30px;
}

.search--wrapper {
  min-height: 60vh;
}
</style>
