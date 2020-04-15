<template>
  <div class="category">
    <nav-bar class="category-nav">
      <div slot="center" class="search-container">
        <input type="text" name id class="search-ipt" placeholder="请输入要查找的商品" />
        <img src="~assets/img/search.png" class="search-icon" alt />
      </div>
    </nav-bar>

    <goods-container class="goods-container" />
  </div>
</template>

<script>
// 引入公共组件
import NavBar from "components/common/navbar/NavBar.vue";
// 引入子组件
import GoodsContainer from "./childCops/GoodsContainer";

export default {
  name: "Category",
  components: {
    NavBar,
    GoodsContainer
  }
};
</script>

<style>
.category {
  position: relative;
}
.category-nav {
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 5;
  background-color: #e4393c;
}
.search-container {
  position: relative;
}
.search-ipt {
  width: 300px;
  height: 30px;
  box-sizing: border-box;
  text-align: center;
  padding-left: 20px;
  font-size: 14px;
  border: transparent;
  border-radius: 50px;
  outline: none;
}
.search-icon {
  position: absolute;
  width: 18px;
  right: 6px;
  top: 15px;
}
.goods-container {
  width: 100%;
  height: calc(100vh - 93px);
  margin-top: 44px;
  overflow: hidden;
}
</style>
