import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'font-awesome/css/font-awesome.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'


Vue.use(mavonEditor)

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(iView);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


