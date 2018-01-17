import Vue from 'vue';
import loginApi from'@/api/login';
import * as types from '../mutation-types';

const state = {
  sid:"",
  sname:"",
  isLogin:false,
  isError:false,
  mark:0,
  centerDialogVisible:false
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
        if (response.code === 200 && response.data){
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
    Vue.set(state,"sid",payload.sid)
    Vue.set(state,"sname",payload.sname);
    Vue.set(state,"isLogin",true);
    Vue.set(state,"mark",payload.mark)
    Vue.set(state,"centerDialogVisible",false)
  },

  [types.LOGIN_FAIL](state,payload){
    Vue.set(state,"isError",true);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
