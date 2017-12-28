import Vue from 'vue';

import * as types from '../mutation-types';
const state = {
  active: 0,
  params: {
    date: '',
    isMorning: '',
  }
};

const getters = {

};

const actions = {
  stepNext({commit, state}){
    commit(types.STEP_NEXT, state);
  },
  stepLast({commit, state}){
    commit(types.STEP_LAST, state);
  },
  changeDate({commit},value){
    commit(types.CHNANGE_DATE, value);
  },
  changeTime({commit},value){
    commit(types.CHNANGE_TIME, value);
  }
};

const mutations = {
  [types.STEP_NEXT](state){
    if(state.active == 0){
      if(state.params.date && state.params.isMorning){
        state.active++;
      }else{
        window.alert("请输入完整")
      }
    }else{
      state.active++;
    }
    if (state.active > 3) state.active = 0;
  },
  [types.STEP_LAST](state){
    if (state.active-- < 1) state.active = 0;
  },
  [types.CHNANGE_DATE](state,value){
   state.params.date = value;
  },
  [types.CHNANGE_TIME](state,value){
    state.params.isMorning = value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}
