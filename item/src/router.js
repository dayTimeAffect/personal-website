import Vue from 'vue'
import Router from 'vue-router'
import homePage from './components/mainBody/homePage'
import error from './components/mainBody/error'
import resume from './components/mainBody/resume'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    },
    {
      path: '*',
      name: 'error',
      component: error
    }
  ]
})
