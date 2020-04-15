<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">Shopping Mall</div>
    </nav-bar>

    <tab-control
      class="home-tab-control"
      :titles="['流行','新款','精选'] "
      @tabClick="tabClick"
      v-show="isFixed"
      :class="'fixed'"
      ref="tabControl2"
    />

    <bscroll ref="scroll" @scroll="scroll" @pullUp="pullUp" class="home-scroll">
      <home-swiper :banners="banners" />
      <home-nav :navs="navs" />
      <home-feature />
      <home-floor :floors="floors" />
      <tab-control
        class="home-tab-control"
        :titles="['流行','新款','精选'] "
        @tabClick="tabClick"
        ref="tabControl1"
      />
      <exhibition :goods="showGoods" />
    </bscroll>
    <!-- 想要监听组件的点击事件，必须加上修饰符.native   -->
    <back-top @click.native="toTop" v-show="isShow" />
  </div>
</template>

<script>
// 引入子组件
import HomeSwiper from "./childCops/HomeSwiper.vue";
import HomeNav from "./childCops/HomeNav.vue";
import HomeFeature from "./childCops/HomeFeature.vue";
import HomeFloor from "./childCops/HomeFloor";

// 引入公共组件
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabcontrol/TabControl.vue";
import Exhibition from "components/content/exhibition/Exhibition";
import Bscroll from "components/common/bscroll/Scroll";
import BackTop from "components/content/backtop/BackTop";
// 引入方法
import {
  getHomeMultiData,
  getHomeNav,
  getHomeFloor,
  getHomeGoods
} from "network/home.js";

export default {
  name: "Home",
  components: {
    // 子组件
    HomeSwiper,
    HomeNav,
    HomeFeature,
    HomeFloor,
    // 公共组件
    NavBar,
    TabControl,
    Exhibition,
    Bscroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      navs: [],
      floors: [],
      total: 0,
      currentTab: "944",
      goods: {
        "944": { page: 0, list: [] },
        "930": { page: 0, list: [] },
        "947": { page: 0, list: [] }
      },
      isShow: false,
      tabOffsetTop: 0,
      isFixed: false,
      saveY: 0
    };
  },
  created() {
    // 请求轮播图数据
    this.getHomeMultiData();
    // 请求导航数据
    this.getHomeNav();
    // 请求楼层数据
    this.getHomeFloor();
    // 请求展览界面数据
    this.getHomeGoods("944");
    this.getHomeGoods("930");
    this.getHomeGoods("947");
  },
  mounted() {
    // 解决betterscroll刷新问题
    /* betterscroll的滚动范围，在页面加载好的时候就已经定了，但是我们的图片这个时候还没有加载进来
        当图片懒加载后，实际范围已经变大，这个时候就出现了滚动bug，解决滚动bug的方法就是添加一个事件
        每当有图片进行懒加载后，就对bscroll执行scroll.refresh()方法，刷新滚动范围，同时设置防多次刷新的
        防抖动函数
     */
    const refresh = this.debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("imgLoad", () => {
      refresh();
    });
    // 等待图片请求完成后获取tabcontrol的位置
    setTimeout(() => {
      this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop;
    }, 500);
  },
  computed: {
    showGoods() {
      return this.goods[this.currentTab].list;
    }
  },
  methods: {
    // 1.请求轮播数据
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.message;
      });
    },
    // 请求导航数据
    getHomeNav() {
      getHomeNav().then(res => {
        this.navs = res.data.message;
      });
    },
    // 请求楼层数据
    getHomeFloor() {
      getHomeFloor().then(res => {
        this.floors = res.data.message;
      });
    },
    // 请求展览界面数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          if (this.total < res.data.message.total)
            this.total = res.data.message.total;
          this.goods[type].list.push(
            ...res.data.message.goods.filter(res => res.goods_small_logo != "")
          );
          this.goods[type].page += 1;
        })
        .catch(err => {});
    },
    // 切换tab栏事件
    tabClick(index) {
      if (index == 0) {
        this.currentTab = "944";
      } else if (index == 1) {
        this.currentTab = "930";
      } else {
        this.currentTab = "947";
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 定义防抖函数
    debounce(func, delay) {
      let timer = null;
      return function() {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply();
        }, delay);
      };
    },
    // 返回顶部的方法
    toTop() {
      // better-scroll 内置方法： scrollTo(0,0,500)  横坐标、 纵坐标、 返回到目标值的时间
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 监听滚动事件
    scroll(position) {
      if (-position.y > 1000) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
      // 判断tab-control是否吸顶
      this.isFixed = -position.y > this.tabOffsetTop;
    },
    // 监听上拉加载更多
    pullUp() {
      if (this.goods[this.currentTab].page >= this.total) {
        console.log("没有更多了");
      } else {
        this.getHomeGoods(this.currentTab);
        console.log("完成上拉加载");
        this.$refs.scroll.scroll.finishPullUp();
      }
    }
  }
};
</script>

<style scoped>
.home-nav {
  background-color: rgb(238, 89, 114);
  font-family: "Times New Roman", Times, serif;
}
.home-tab-control {
  background-color: #fff;
  border-bottom: 2px rgba(85, 85, 85, 0.507) solid;
  padding-bottom: 10px;
  margin-bottom: 5px;
}
.home-scroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.fixed {
  position: relative;
  z-index: 8;
}
</style>
