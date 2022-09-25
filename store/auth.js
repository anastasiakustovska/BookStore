import {LocalStorageKeys} from "@/const/auth";

const initialState = {
  username: null,
  isAuthorized: false,
}

export const state = () => initialState;

export const actions = {
  async authorizeUser({commit}, data){
    const {username} = data;

    commit('saveUser', {username});
  },

  async logoutUser({commit}) {
    commit('logout');
  }
}

export const mutations = {
  saveUser: (state, payload) => {
    localStorage.setItem(LocalStorageKeys.accessToken, (Math.random() + 1).toString(36).substring(12))
    Object.assign(state, {...payload, isAuthorized: true});
  },

  logout: (state) => {
    state.isAuthorized = false;
    state.username = false;
  }
}
