
export default {
    state: {
        currentWeather: null,
        currentWeatherForecast: null,
        appId: "4711dd3a050971833741b368b6dcff60",
        location: {},
        colors: {
            Clouds: "#00B4E6",
            Clear: "#10CCFF",
            Rain: "#005DA5",
            Drizzle: "#005DA5"
        }
    },
    getters: {
        currentWeather: state => state.currentWeather,
        currentWeatherForecast: state => state.currentWeatherForecast,
        location: state => state.location,
        appId: state => state.appId,
        colors: state => state.colors
    },
    mutations: {
        setCurrentWeather: function (state, payload) {
            state.currentWeather = payload;
        },
        setCurrentWeatherForecast: function (state, payload) {
            state.currentWeatherForecast = payload;
        },
        setLocation: function (state, payload) {
            state.setLocation = payload;
        }
    },
    actions: {
        getWeather: async function ({ commit, getters, dispatch, state }, payload) {
            const location = {
                // Honolulu sunny weather
                // coords: {
                //   latitude: 21.3245,
                //   longitude: 157.9251
                // }
                coords: {
                    latitude: 38.9072,
                    longitude: 77.0369
                }
            };
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${payload.lat}&lon=${payload.lon}&appid=${getters.appId}&units=metric`;
            try {
                payload.id = 'coordinates';
                await dispatch('saveItem', payload);
                await fetch(url, {
                    method: "GET",
                    headers: {
                    }
                }).then(response => response.json())
                    .then(data => {
                        document.documentElement.style.setProperty("--background-color", state.colors[data.weather[0].main]);
                        commit('setCurrentWeather', data);
                        data.id = 'getWeather';
                        dispatch('saveItem', data);
                    })
                    .catch(error => {
                        console.info(error);
                    });
            } catch (error) {
                console.error(error);
            }
        },

        getWeatherForecast: async function ({ commit, getters, dispatch }, payload) {
            const location = {
                // Honolulu sunny weather
                // coords: {
                //   latitude: 21.3245,
                //   longitude: 157.9251
                // }
                coords: {
                    latitude: 50.8028925,
                    longitude: 3.2095744
                }
            }
            const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${payload.lat}&lon=${payload.lon}&appid=${getters.appId}`;
            try {
                await fetch(url, {
                    method: "GET",
                    headers: {
                    }
                }).then(response => response.json())
                    .then(data => {
                        commit('setCurrentWeatherForecast', data);
                        data.id = 'getWeatherForecast';
                        dispatch('saveItem', data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } catch (error) {
                console.info(error);
            }
        },

        getLocation: async function ({ commit, getters, dispatch }) {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        const payload = {
                            lat: position.coords.latitude,
                            lon: position.coords.longitude
                        };
                        commit("setLocation", payload);
                        resolve(payload)
                    },
                    error => {
                        console.info(error);
                        reject(error)
                    },
                    {
                        timeout: 1000,
                        maximumAge: 10000,
                        enableHighAccuracy: true
                    }
                );
            })

        }
    }
};