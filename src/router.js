import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      // eslint-disable-next-line
      component: () => import('./views/Home.vue')
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
