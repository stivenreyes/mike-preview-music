import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import EventBus from './plugins/event-bus'
import msToMm from '@/filters/ms-to-mm'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(VueRouter)

const router = new VueRouter({ routes, mode: 'history' })

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
