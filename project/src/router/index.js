import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import Index from '@/page/index/index'
import Home from '@/page/home'
import Detail from '@/page/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: '',
      component: Index,
      children :[
        {
          path:'',
          component:Home,
        },
        {
          path:'/detail/:id',
          name:'detail',
          component:Detail,
        }
      ]
    }
  ],
  history:true,
})
