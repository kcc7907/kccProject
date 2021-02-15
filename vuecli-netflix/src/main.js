import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'
// import 'minireset.css/minireset.min.css'
// import 'bootstrap'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.bootstrap = bootstrap

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
