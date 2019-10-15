import Vue from 'vue'
import Router from 'vue-router'
import homePage from './components/mainBody/homePage'
import error from './components/mainBody/error'
import resume from './components/mainBody/resume'
<<<<<<< HEAD
import production from './components/mainBody/production'
=======
>>>>>>> c2dc356156ca13f51ff669af89cfc7c63ce1d420

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
<<<<<<< HEAD
      path: '/production',
      name: 'production',
      component: production
    },
    {
=======
>>>>>>> c2dc356156ca13f51ff669af89cfc7c63ce1d420
      path: '*',
      name: 'error',
      component: error
    }
  ]
})
