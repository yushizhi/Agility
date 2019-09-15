import Vue from 'vue'
import App from './App'
import router from './router'
import './directives'
import './components'
import store from './store'
import VueSweetalert2 from './plugins/vue-sweetalert2'
import Message from './plugins/message'
import './filters'
import { mockArticles } from "./mock/data";
import ls from './utils/localStorage'
import './mock'
import axios from 'axios'

Vue.prototype.$axios = axios

const AddMockData = (() => {
  const isAddMockData = true
  let userArticles = ls.getItem('articles')

  if (Array.isArray(userArticles)) {
    userArticles = userArticles.filter(article => parseInt(article) === 1)
  } else {
    userArticles = []
  }

  let articles = isAddMockData ? [...userArticles, ...mockArticles(60)] : userArticles

  store.commit('UPDATE_ARTICLES', articles)
})()

Vue.use(VueSweetalert2)
Vue.use(Message)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
