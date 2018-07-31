import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shopShare from '@/components/shopShare'
import Select from '@/components/Select'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
    	path:'/shopShare',
    	name:'shopShare',
    	component:shopShare,
    },
    {
    	path:'/Select',
    	name:'Select',
    	component:Select,
    }
  ]
})
