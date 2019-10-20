import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


/*route*/
import VueRoute from 'vue-router'
import healthPage from './Health.vue'
import historyPage from './History.vue'
import homePage from './Home.vue'

const route = new VueRoute({
  mode: 'history',
  base: __dirname,
  routes: [
    { name: 'Home', path: '/', component: homePage },
    { name: 'Health', path: '/health', component: healthPage },
    { name: 'History', path: '/history', component: historyPage }
  ]
})


Vue.use(VueRoute)
Vue.use(ElementUI)
new Vue({
  el: '#app',
  route,
  render: h => h(App)
})
