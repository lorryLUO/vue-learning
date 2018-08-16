import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'

Vue.use(Router)

const index = r => require.ensure([], () => r(require('@/page/index/index.vue')), 'index')
const home = r => require.ensure([], () => r(require('@/page/home.vue')), 'home')
const Detail = r => require.ensure([], () => r(require('@/page/detail.vue')), 'Detail')

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
      component: index,
      children: [
        {
          path: '',
          component: home,
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: Detail,
        }
      ]
    }
  ],
  history: true,
})
