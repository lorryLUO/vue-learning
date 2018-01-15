import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import Index from '@/page/index/index'
import Home from '@/page/home'

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
        }
      ]
    }
  ],
  history:true,
})
