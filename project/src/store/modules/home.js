import * as types from '../mutation-type'
import api from '@/api/getData'
/**
 * App通用配置
 */
const state = {
    bannerList: [{key: 'https://pic.maizuo.com/h5PicUpload/0b27c7dfe4b1a9fae1fb1cb5dea6fdac.jpg'},
                {key: 'https://pic.maizuo.com/usr/movie/d44e5dfcb60df8ac39c101b21cd8bf9d.jpg'},
                {key: 'https://pic.maizuo.com/h5PicUpload/91e6a4e4b8d87a82a4ef6dd9c70aa009.jpg'},
                {key: 'https://pic.maizuo.com/h5PicUpload/0b27c7dfe4b1a9fae1fb1cb5dea6fdac.jpg'}
                ],
    nowPlayList: []
}

const actions = {
    // 获取热映
    getNowPlaying: function ({ commit }) {
        api.getNowPlaying(function (res) {
            console.log(res)
            commit(types.HOME_GET_NOWPLAYING_LIST, res.data)
        })
    },
}

const getters = {
    getBannerList: state => state.bannerList,
    getNowPlayList: state => state.nowPlayList,
}

const mutations = {

    [types.HOME_GET_NOWPLAYING_LIST](state,res){
        console.log(res)
        state.nowPlayList = res.films
    },
}

export default {
    state,
    actions,
    getters,
    mutations
}