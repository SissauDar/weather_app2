import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

// navigator.geolocation.getCurrentPosition(position => {
//   console.log(position.coords.latitude)
//   console.log(position.coords.longitude)
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
