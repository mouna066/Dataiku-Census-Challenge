import Vue from 'vue'
import App from './App.vue'
import router from './config/router'
import axios from 'axios';


axios.defaults.headers.common['Content-type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
