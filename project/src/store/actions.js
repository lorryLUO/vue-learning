
import { getAdminInfo } from '@/api/getData'

export default {

	async getUserInfo({ commit, state }) {
		let res = await getUser()
		commit(GET_USERINFO, res)
	},
	async getAdminData({ commit }){
		try{
			const res = await getAdminInfo()
			console.log(res)
			if (res.status == 1) {
				commit('saveAdminInfo', res.data)
			}else{
				throw new Error(res)
			}
		}catch(err){
			console.log('您尚未登陆或者session失效')
		}
	}
}