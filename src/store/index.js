import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentWeather: null,
    currentWeatherForecast: null,
    appId: "4711dd3a050971833741b368b6dcff60"
  },
  getters: {
    currentWeather: state => state.currentWeather,
    currentWeatherForecast: state => state.currentWeatherForecast
  },
  mutations: {
    setCurrentWeather: function (state, payload) {
      state.currentWeather = payload;
    },
    setCurrentWeatherForecast: function (state, payload) {
      state.currentWeatherForecast = payload;
    }
  },
  actions: {
    getWeather: async function ({ commit }, payload) {
      const location = {
        // Honolulu sunny weather
        // coords: {
        //   latitude: 21.3245,
        //   longitude: 157.9251
        // }

        // Seatme rainy weather
        // coords: {
        //   latitude: 47.6062,
        //   longitude: 122.3321
        // }

        // Kortrijk cloudy weather
        // coords: {
        //   latitude: 50.8028925,
        //   longitude: 3.2095744
        // }

        coords: {
          latitude: 38.9072,
          longitude: 77.0369
        }
      };
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&APPID=425a5a589b1656880c69269cea9cf75f&units=metric`;
      try {
        await fetch(url, {
          method: "GET",
          headers: {
          }
        }).then(response => response.json())
          .then(data => {
            console.log(data);
            const colors = {
              Clouds: "#00B4E6",
              Clear: "#10CCFF",
              Rain: "#005DA5"
            }
            console.log(colors[data.weather[0].main]);

            document.documentElement.style.setProperty("--background-color", colors[data.weather[0].main]);
            commit('setCurrentWeather', data);
          })
          .catch(error => {
            console.log(error);
          });
      } catch (error) {
        console.error(error);
      }
    },

    getWeatherForecast: async function ({ commit }) {
      const location = {
        // Honolulu sunny weather
        // coords: {
        //   latitude: 21.3245,
        //   longitude: 157.9251
        // }

        // // Seatme rainy weather
        // coords: {
        //   latitude: 47.6062,
        //   longitude: 122.3321
        // }
        coords: {
          latitude: 50.8028925,
          longitude: 3.2095744
        }
      }
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${this.state.appId}`;
      try {
        await fetch(url, {
          method: "GET",
          headers: {
          }
        }).then(response => response.json())
          .then(data => {
            commit('setCurrentWeatherForecast', data);
          })
          .catch(error => {
            console.log(error);
          });
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
});
