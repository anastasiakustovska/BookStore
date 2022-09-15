import {LocalStorageKeys} from "@/const/auth";

export const state = () => ({
  username: null,
  isAuthorized: false,
});

export const actions = {
  async authorizeUser({commit}, data){
    const {username} = data;

    commit('saveUser', {username});
  },
}

export const mutations = {
  saveUser: (state, payload) => {
    localStorage.setItem(LocalStorageKeys.accessToken, (Math.random() + 1).toString(36).substring(12))
    Object.assign(state, {...payload, isAuthorized: true});
  }
}
