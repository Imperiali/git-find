import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import STORE from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store(STORE)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
