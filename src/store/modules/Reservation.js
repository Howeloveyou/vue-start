import Vue from 'vue';
import reservationApi from '@/api/reservation';

import * as types from '../mutation-types';
const state = {
  active: 0,
  params: {
    sid:"",
    date: '',
    time: [],
    times:"",
    whichRoom:0,
    pageSize:9,
    currentPage:1,
    rid:0,
    total:0,
    seid:0,
    seatNum:0,
    Ctime:"",
    place:"",
  },
  room:{
    floor:0,
    room:"",
  },
  message:"",
  cancelMessage:""

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
  },
  getSeatList({commit},value){
    commit(types.GET_SEATLIST);
  },
  getRoom({commit}){
    commit(types.GET_ROOM);
  },
  toReservation({commit}){
    commit(types.TO_RESERVATION);
  },
  cancelReservation({commit}){
    commit(types.CANCEL_RESERVATION)
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
     // if(state.params.whichRoom === 0){
     //   window.alert("请选择阅览室！")
     // }else{
     //   state.active++;
     // }
      state.active ++;
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
  },
  [types.GET_SEATLIST](state){
    reservationApi.getSeatList(
      state.params,
      response=>{
        console.log(response.data)
        Vue.set(state,"seatList",response.data)
      },
      error=>{

      }
    )
  },
  [types.GET_ROOM](state){
    reservationApi.getRoom(
      state.params,
      response=>{
        console.log(response.data)
        Vue.set(state,"room",response.data)
      },
      error=>{

      }
    )
  },
  [types.TO_RESERVATION](state){
    reservationApi.toReservation(
      state.params,
      response=>{
        console.log(response)
        Vue.set(state,"message",response.message);
      },
      error=>{

      }
    )

  },
  [types.CANCEL_RESERVATION](state){
    reservationApi.cancelReservation(
      state.params,
      response=>{
        console.log(response)
        Vue.set(state,"cancelMessage",response.message);
      },
      error=>{

      })
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}
