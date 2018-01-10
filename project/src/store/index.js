import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
 
Vue.use(Vuex)

const state = {
	adminInfo: {
		avatar: 'default.jpg'  // 用户信息
	}
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})