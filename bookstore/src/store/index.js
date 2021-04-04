import { createStore } from 'vuex'
import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import createPersistedState from 'vuex-presistedstate'

Vue.use(Vuex) //安装插件

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart
  },
  plugins: [createPersistedState({
    //reducer函数中返回要持久化存储的数据
    //持久化store中的部分状态信息
    reducer(data) {
      return {
        //设置只存储cart模块中的状态
        cart: data.cart
        //或者设置只存储cart模块中的items数据
        //products: data.cart.items
      }
    }
  })]
})
