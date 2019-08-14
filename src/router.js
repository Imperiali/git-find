import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:user',
      name: 'user',
      props: true,
      // eslint-disable-next-line
      component: () => import('./views/UserDetails.vue')
    }
  ]
})
