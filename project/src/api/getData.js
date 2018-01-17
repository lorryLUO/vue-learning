import axios from 'axios'

// let urlPost = process.env.NODE_ENV !== 'production' ? '/test' : 'http://120.78.94.51:8088/';
let url = process.env.NODE_ENV !== 'production' ? '/api/' : 'http://m.maizuo.com/v4/api/';
 
let func_axios_post = (url = '', data = {}, type = 'POST') => {
	
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
 
let func_axios = (api,cb) => {
    axios.get(api).then(function(res){
        if(res.status >= 200 && res.status <300){
            cb(res.data)
        }
    }).catch((error) => {
        // new Error('desc');
        return Promise.reject(error)
    })
}

export default {

	// login: (data) => func_axios_post(urlPost + '/api/login', data),
	/**
     * 获取首页热映电影
     */
	getNowPlaying:(cb)=>func_axios(url + 'film/now-playing?_t=' + new Date()*1 +'&page=1&count=5',cb),
	 /**
     * 根据id获取相关影片信息
     */
    getFilmDetail:(id,cb)=>func_axios(url + 'film/' + id + '?__t=' + new Date()*1,cb),
}