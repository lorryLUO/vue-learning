import axios from 'axios'

let url = process.env.NODE_ENV !== 'production' ? '/test' : 'http://120.78.94.51:8088/';

let func_axios = (url = '', data = {}, type = 'POST') => {
	
	return new Promise((resolve, reject) => {
		
		axios({
			method: type,
			url: url,
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