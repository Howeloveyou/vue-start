import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import Reservation from './modules/Reservation'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counter,
    Reservation,
  }
});


