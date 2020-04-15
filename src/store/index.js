import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  cartList: []
}

const mutations = {
  addCart(state, payload) {
    // 查找是否有相同商品
    let oldProduct = state.cartList.find(res => res.goodsId === payload.goodsId);
    // 查找后根据是否存在相同商品进行判断
    if (oldProduct) {
      oldProduct.count += 1
    } else {
      payload.count = 1
      state.cartList.push(payload)
    }
    console.log(state.cartList);
  }
}

export default new Vuex.Store({
  state,
  mutations,
  // actions
})