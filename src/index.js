// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'

import { store } from './_store'
import { router } from './_helpers'
import App from './app/App'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
