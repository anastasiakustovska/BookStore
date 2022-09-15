export const state= () =>({
  items: []
});

export const mutations = {
  addToList: (state, payload) => {
    state.items.push(payload);
  },
  removeFromList: (state, payload) => {
   state.items =  state.items.filter((book) => {
    return book.isbn13 !== payload.isbn13;
    });
  }
}

export const getters = {
  getAllItemIds: (state) => {
    return state.items.map(element => {
      return element.isbn13;
    });
  }
}


