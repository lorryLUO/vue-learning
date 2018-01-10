import axios from 'axios'

let url = process.env.NODE_ENV !== 'production' ? '/' : 'http://120.78.94.51:8088/';

let func_axios = (api,data) => {
    axios({
		method: 'post',
		url: api,
		data: data
	  }).then(function(res){
        if(res.status >= 200 && res.status <300){
            cb(res.data)
        }
    }).catch((error) => {
        // new Error('desc');
        return Promise.reject(error)
    })
}

export default {
    /**
     * 根据请求的时间戳获取banner列表
     */
	getAdminInfo:()=>{
		return{
			id:'111'
		}
	},
	
	login:(data)=>func_axios(url + '/api/login',data),
}