import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { HTTP } from './util/axios';
Vue.prototype.$http = HTTP
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
