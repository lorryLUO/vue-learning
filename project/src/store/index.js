import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common' 
import home from './modules/home' 
import detail from './modules/detail' 

Vue.use(Vuex)

export default new Vuex.Store({
	modules :{
	     common,
		 home,
		 detail
	}
})

