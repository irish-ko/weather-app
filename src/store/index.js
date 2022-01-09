import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      name : '',
      isShow : false,
      weatherData: null,

  },
  mutations: {
      setName(state, name) {
          state.isShow = true;
          state.name = name;
      },
      setWeatherCity(state, weather) {
          state.weatherData = weather;
      },
      setShowFalse(state) {
          state.isShow = false;
      }
  },
    getters:{
      getCityName:(state) => {
          return state.name;
      },
        getWeatherCity:(state) => {
            return state.weatherData;
        },
        getShow: (state) => {
            return state.isShow;
        },

    },
  actions: {
  },
  modules: {
  }
})
