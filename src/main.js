import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.less'
import axios from 'axios';
import Vueaxios from 'vue-axios';

Vue.use(Vueaxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
