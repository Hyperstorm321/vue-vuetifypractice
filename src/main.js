import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

//views
import Index from './components/Index.vue'
import AboutUs from './components/AboutUs.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter(
  {
    mode: 'history',
    routes:[
      {
        path:'/',
        name: 'Index',
        component: Index
      },
      {
        path: '/aboutus',
        name: 'AboutUs',
        component: AboutUs
      }
    ]
  }
)

new Vue({
  vuetify,
  router : router,
  render: h => h(App)
}).$mount('#app')
