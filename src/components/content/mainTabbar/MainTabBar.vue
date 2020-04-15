<template>
  <tab-bar>
    <!-- 如果想要改变导航栏字体颜色，就设置activeColor="颜色" 默认为黑色 -->
    <tab-bar-item path="/home">
      <!-- 在属性里面使用别名必须要加~ -->
      <img slot="icon" src="~assets/img/home.png" alt />
      <img slot="icon-1" src="~assets/img/home1.png" alt />
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="icon" src="~assets/img/categories.png" alt />
      <img slot="icon-1" src="~assets/img/categories1.png" alt />
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shop">
      <img slot="icon" src="~assets/img/shop.png" alt />
      <img slot="icon-1" src="~assets/img/shop1.png" alt />
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/user">
      <img slot="icon" src="~assets/img/user.png" alt />
      <img slot="icon-1" src="~assets/img/user1.png" alt />
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>