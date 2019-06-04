import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})