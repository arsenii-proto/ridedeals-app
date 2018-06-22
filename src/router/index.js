import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Unauthorized from '@/views/Unauthorized.vue'
import ClientDashboard from '@/views/ClientDashboard.vue'
import DriverDashboard from '@/views/DriverDashboard.vue'

import { CheckLogin } from "@/services/CheckLogin";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: Unauthorized
    },
    {
      path: '/client-dashboard',
      name: 'Client Dashboard',
      component: ClientDashboard
    },
    {
      path: '/driver-dashboard',
      name: 'Driver Dashboard',
      component: DriverDashboard
    },
  ]
})


router.beforeEach((to, from, next) => {

  if (['login', 'unauthorized'].indexOf(to.name) == -1) {

    CheckLogin.canGo().then(() => {

      next()

    }).catch(() => {

      if (from.name) {

        router.replace('/unauthorized')

      } else {

        router.replace('/login')
      }

    })

  } else {

    next()
  }

});

router.afterEach(() => {

  setTimeout(() => {

    Vue.prototype.$stiller.splashScreen.hide()

  }, 200)

})

export default router