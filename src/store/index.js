import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  cartList: [],
  totalPrice: 0,
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
      payload.checked = true
      state.cartList.push(payload)
    }
    // 修改总价格
    // state.totalPrice += payload.goodsPrice
    this.commit('getTotalPrice')
  },

  getTotalPrice(state) {
    let checkedList = state.cartList.filter(res => res.checked == true)
    let total = 0
    checkedList.forEach(res => {
      total += res.goodsPrice * res.count
    })
    state.totalPrice = total
  }
}

export default new Vuex.Store({
  state,
  mutations,
  // actions
})