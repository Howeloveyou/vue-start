import Vue from 'vue';
import reservationApi from '@/api/reservation';

import * as types from '../mutation-types';
const state = {
  active: 0,
  params: {
    date: '',
    time: '',
    whichRoom:0,
    pageSize:9,
    currentPage:1,
    rid:0,
    total:0,
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
  chooseRoom({commit},value){
    commit(types.CHOOSE_ROOM,value);
  },
  getRoomList({commit},value){
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
    }else if (state.active == 1){
     if(state.params.whichRoom === 0){
       window.alert("请选择阅览室！")
     }else{
       state.active++;
     }
    } else{
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
  [types.CHOOSE_ROOM](state,value){
    console.log(value);
    state.params.rid = value;
  },
  [types.GET_ROOMLIST](state){
    reservationApi.getRoomList(
      state.params,
      response=>{
        console.log(response.data.list)
        Vue.set(state,"roomList",response.data.list)
        Vue.set(state,'total',response.data.total)
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
