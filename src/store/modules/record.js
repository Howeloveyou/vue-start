import Vue from 'vue';
import recordApi from'@/api/record';
import * as types from '../mutation-types';

const state = {
  sid:"",
};

const getters = {
};

const actions = {
  getRecord({commit},data){
   commit(types.GET_RECORD,data)
  },
  getSignInfo({commit}){
    commit(types.GET_SIGNINFO)
  }

};

const mutations = {

  [types.GET_RECORD](state,data){
    recordApi.getRecord(
      state,
      response=>{
        console.log(response.data);
        Vue.set(state,"recordList",response.data)
      },
      error=>{

      }
    )
  },

  [types.GET_SIGNINFO](state){
    recordApi.getSignInfo(
      state,
      response=>{
        console.log(response.data);
        Vue.set(state,"signInfo",response.data)
      },
      error=>{

      }
    )
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}
