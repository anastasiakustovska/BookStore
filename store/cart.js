import {priceToNumber} from "@/utils/functions/price";

const initialState = {
  items: [],
}

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
  changeProductQuantity: (state, {isbn, quantity}) => {
    const items = state.items;

    const cartItemIdx = items.findIndex((item) => {
      return item.isbn13 === isbn;
    });

    if (cartItemIdx >= 0) {
      items[cartItemIdx].quantity = quantity;
      state.items = items;
    }
  },
  removeFromCart: (state, payload) => {
    const {index} = payload;
    const items = state.items.splice(index, 1);

    if (items.length === 1) {
      Object.assign(state, initialState);
    } else {
      state.items = items;
    }
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
  },
  countAllSum: (state) => {
    return state.items.reduce((sum, item) => {
      const price = Number(sum) + (priceToNumber(item.price) * Number(item.quantity) ?? 1);

      return price.toFixed(2);
    }, 0);
  },
}


