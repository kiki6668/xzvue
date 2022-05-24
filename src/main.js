import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyHeader from './components/MyHeader'
import axios from 'axios'
Vue.prototype.axios=axios
Vue.config.productionTip = false
Vue.component('my-header',MyHeader)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
