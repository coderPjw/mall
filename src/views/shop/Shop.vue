<template>
  <div>
    <cart-list :cartList="cartList" />
  </div>
</template>

<script>
// 引入子组件
import CartList from "./childCops/CartList";
export default {
  name: "Shop",
  data() {
    return {
      cartList: []
    };
  },
  components: {
    CartList
  },
  created() {
    this.cartList = this.$store.state.cartList;
  }
};
</script>

<style scoped>
</style>
