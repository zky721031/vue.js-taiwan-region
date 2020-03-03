import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 封装 api
// 讓每一個請求都添加 /api 請求頭
// ex：一開始的請求是 http://localhost:8080/home，添加之後請求變為 http://localhost:8080/api/home
export const http = axios.create({
  baseURL: '/api'
})