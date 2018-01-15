// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './config'

Vue.use(ElementUI)

Vue.config.productionTip = false

//自定义滚动指令
Vue.directive('scroll',{
  bind:function(el,binding){
    window.addEventListener('scroll',() => {
        let fnc = binding.value;
        comments.log(scroll)
        fnc(el);
    })
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
