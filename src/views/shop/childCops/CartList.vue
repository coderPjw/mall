<template>
  <div>
    <ul class="cart-list">
      <li v-for="item in cartList" :key="item.goodsId">
        <input type="checkbox" checked class="ipt" />
        <img :src="item.goodsImg" alt class="img" />
        <span class="name">{{item.goodsName}}</span>
        <span class="price">￥{{item.goodsPrice}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CartList",
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.cart-list {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 89px;
}
</style>