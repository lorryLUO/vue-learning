import Vue from 'vue'
import Vuex from 'vuex'
import {getAdminInfo} from '@/api/getData'
/* import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
 */
Vue.use(Vuex)

const state = {
	adminInfo: {
		avatar: 'default.jpg'  // 用户信息
	}
}

const mutations = {
	saveAdminInfo(state, adminInfo){
		state.adminInfo = adminInfo;
	}
}

const actions = {
	async getAdminData({commit}){
		try{
			const res = await getAdminInfo()
			console.log(res)
			if (res.status == 1) {
				commit('saveAdminInfo', res.data);
			}else{
				throw new Error(res)
			}
		}catch(err){
			console.log('您尚未登陆或者session失效')
		}
	}
}

export default new Vuex.Store({
	state,
	// getters,
	actions,
	mutations
})