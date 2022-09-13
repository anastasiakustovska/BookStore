export const state = () => ({
  username: null,
});

export const actions = {
  async authorizeUser({commit}, data){
    await this.$axios.$post('https://dummyjson.com/auth/login', data)
  },
}

export const mutations = {
}
