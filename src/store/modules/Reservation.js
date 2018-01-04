import Vue from 'vue';
import reservationApi from '@/api/reservation';

import * as types from '../mutation-types';
const state = {
  active: 0,
  params: {
    date: '',
    time: '',
    room:{
      floor:"",
      readingRoom:"",
      seat:""
    },
    roomList:[]
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
  },
  getRoomList({commit}){
    commit(types.GET_ROOMLIST);
  }
};

const mutations = {
  [types.STEP_NEXT](state){
    if(state.active == 0){
      if(state.params.date && state.params.time){
        state.active++;
      }else{
        window.alert("请选择预约时间！")
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
    state.params.time = value;
  },
  [types.GET_ROOMLIST](state){
    reservationApi.getRoomList(
      response=>{
        console.log(response.data)
        Vue.set(state,"roomList",response.data)
      },
      error=>{

      }
    )
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
