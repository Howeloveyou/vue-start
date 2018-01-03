import loginApi from'@/api/login';

import * as types from '../mutation-types';
const state = {

};

const getters = {
};

const actions = {
  login({commit},data){
    console.log(data);
    loginApi.toLogin(
      data,
      () => {
        commit(types.LOGIN_SUCCESS);
      },
      () => {
        commit(types.LOGIN_FAIL);
      }
      )
  }
};

const mutations = {
  [types.LOGIN_SUCCESS](){

  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
