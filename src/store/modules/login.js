import loginApi from'@/api/login';

import * as types from '../mutation-types';
const state = {
  name:""
};

const getters = {
};

const actions = {
  login({commit},data){
    console.log(data);
    loginApi.toLogin(
      data,
      response => {
        console.log(response.code);
        if (response.code == 200 && response.data){
          commit(types.LOGIN_SUCCESS,response.data);
        }
       },
      error=> {
       // commit(types.LOGIN_FAIL);
      }
      )
  }
};

const mutations = {
  [types.LOGIN_SUCCESS](state,value){
    console.log(value);
    state.name=value.sname;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
