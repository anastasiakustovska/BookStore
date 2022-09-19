export const state = () =>({
  items: [],
});

export const mutations = {
  addToCart: (state, payload) => {
    const {book} = payload;
    const items = state.items;

    const cartItemIdx = items.findIndex((item) => {
      return item.isbn13 === book.isbn13;
    });

    if (cartItemIdx >= 0) {
      items[cartItemIdx].quantity++;
      state.items = items;
    } else {
      items.push({...book, quantity: 1});
      state.items = items;
    }
  },
  removeFromCart: (state, payload) => {
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
  },
  countAllItems: (state) => {
    return state?.items?.length ?? 0;
  }
}


