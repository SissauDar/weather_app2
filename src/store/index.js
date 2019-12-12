import Vue from 'vue'
import Vuex from 'vuex'

import todoData from './modules/cachingData';
import weather from "./modules/weather";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todoData,
    weather
  }
});
