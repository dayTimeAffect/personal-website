<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'font-awesome/css/font-awesome.css'


Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(iView);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
=======
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'font-awesome/css/font-awesome.css'


Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(iView);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
>>>>>>> c2dc356156ca13f51ff669af89cfc7c63ce1d420
