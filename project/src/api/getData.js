import axios from 'axios'

let url = process.env.NODE_ENV !== 'production' ? '/api' : 'http://120.78.94.51:8088/';

let func_axios = (api, data) => {
	
	return new Promise((resolve, reject) => {
		
		axios({
			method: 'post',
			url: api,
			data: data
		}).then(function(res) {
			if(res.status >= 200 && res.status < 300) {
				let obj = res
				if (typeof obj !== 'object') {
					obj = JSON.parse(obj);
				}
				resolve(obj)
			}
		}).catch((error) => {
			// new Error('desc');
			reject(error)
		})
	})
}

export default {

	login: (data) => func_axios(url + '/api/login', data),
}