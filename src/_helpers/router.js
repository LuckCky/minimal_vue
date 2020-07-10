import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '../login/LoginPage'
import HomePage from '../home/HomePage'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/login', component: LoginPage },
    { path: '/home', component: HomePage },

    // otherwise redirect to projects
    { path: '*', redirect: '/home' }
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    return next('/login')
  }

  next()
})
