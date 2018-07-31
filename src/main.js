// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import HelloWorld from './components/HelloWorld.vue'
import router from './router'
import VueRouter from 'vue-router'
import '../static/css/base.css'
import '../static/iconfont/iconfont.css'
import '../static/js/jquery.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueRouter)
//const router=new VueRouter({
//	mode:'history',
//	routes:routers
//})
const routes=[
{path:'/',component:App},
{path:'/HelloWorld',component:HelloWorld},
]
//const router=new VueRouter({
//	routes
//});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
