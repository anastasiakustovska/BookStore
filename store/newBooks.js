export const state = () => ({
  error: 0,
  total: 0,
  books: [],
})

export const getters = {
  getBooks(state) {
    return state.books;
  }
}

export const mutations = {
  setBooks(state, data) {
    state.books = data.books;
    state.total = data.total;
    state.error = data.error;
  }
}

export const actions = {
  async fetchNewBooks({ commit }) {
    const data = await this.$axios.$get('/new');

    commit('setBooks', data);
    return data;
  }
}
