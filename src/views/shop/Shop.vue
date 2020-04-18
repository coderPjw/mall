<template>
  <div>
    <nav-bar class="shop-navbar">
      <div slot="left" class="back" @click="back">
        <img src="~assets/img/back.png" alt width="24px" />
      </div>
      <div slot="center">购物车({{cartList.length}})</div>
    </nav-bar>
    <bscroll class="shop-scroll">
      <cart-list :cartList="cartList" />
    </bscroll>
    <cart-bottom-bar class="bottom-bar" />
  </div>
</template>

<script>
// 引入公共组件
import NavBar from "components/common/navbar/NavBar";
import Bscroll from "components/common/bscroll/Scroll";
// 引入子组件
import CartList from "./childCops/CartList";
import CartBottomBar from "./childCops/CartBottomBar";
export default {
  name: "Shop",
  data() {
    return {
      cartList: []
    };
  },
  components: {
    CartList,
    NavBar,
    Bscroll,
    CartBottomBar
  },
  created() {
    this.cartList = this.$store.state.cartList;
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.shop-navbar {
  color: #fff;
  background-color: #e4393c;
}
.back {
  padding-top: 5px;
}
.shop-scroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 89px;
}
.bottom-bar {
  position: absolute;
  bottom: 49px;
}
</style>
