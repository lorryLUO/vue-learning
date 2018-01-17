import * as types from '../mutation-type'
import api from '@/api/getData'

const state = {
    detail:null,
    // title:''
}

const actions = {
    //获取影片详情并设置标题
    getFilmDetail:function({commit},id){
    
        api.getFilmDetail(id,function(res){
            // 改变title
            commit(types.COM_CONF,{
                title: res.data.film.name
            })
            // 获取明细电影信息
            commit(types.DETAIL_GET_INFO,res.data);
        })
    },
}
const getters = {
    getFilmDetail: state => state.detail,
}

const mutations = {
    [types.DETAIL_GET_INFO](state,res){
        state.detail = res.film
    },
}

export default {
    state,
    actions,
    getters,
    mutations
}