import Vue from 'vue';
import loginApi from'@/api/login';
import * as types from '../mutation-types';

const state = {
  sname:"",
  isLogin:false,
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
        }else{
          commit(types.LOGIN_FAIL,response.message);
        }
       },
      error=> {
        commit(types.LOGIN_FAIL,error.message);
      }
      )
  }
};

const mutations = {
  [types.LOGIN_SUCCESS](state,payload){
    console.log(payload);
    Vue.set(state,"sname",payload.sname);
    Vue.set(state,"isLogin",true)
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
