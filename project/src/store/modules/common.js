import * as types from '../mutation-type'

/**
 * App通用配置
 */
const state = {
    title:'逗电影',
    loading:0,
    leftNavState:false
}

const actions = {
    //本程序主要设置标题栏，对于通用程序，则可以设置返回按钮，底部导航栏
    comConf({commit},settings){
        commit(types.COM_CONF,settings)
    },
}

const getters = {

    comConf :state => state,
    title :state => state.title,
    loading :state => state.loading,
    leftNavState :state => state.leftNavState
}

const mutations = {
  [types.COM_CONF](state ,settings){
      state = Object.assign(state,settings)
  }
}

export default {
    state,
    actions,
    getters,
    mutations
}