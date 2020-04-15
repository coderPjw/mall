<template>
  <div id="app">
    <keep-alive exclude="List,Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar v-show="isShow" />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";
export default {
  name: "App",
  data() {
    return {
      isShow: true
    };
  },
  watch: {
    $route(to, from) {
      if (to.path == "/list" || to.path == "/detail") {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  },
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "assets/css/base.css";
#app {
  padding-bottom: 49px;
}
</style>
