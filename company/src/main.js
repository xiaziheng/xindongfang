import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { HTTP } from './util/axios';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI)
Vue.prototype.$http = HTTP
Vue.prototype.iphead = 'http://www.deresen.com'//http://39.97.242.38 测试 http://106.12.9.12
Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper) 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
