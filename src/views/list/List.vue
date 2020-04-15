<template>
  <div class="list">
    <nav-bar class="list-nav">
      <div slot="left" class="back" @click="back">
        <img src="~assets/img/back.png" alt width="22px" />
      </div>
      <div slot="center" class="search-container">
        <input type="text" name id class="search-ipt" placeholder="搜索" />
      </div>
    </nav-bar>
    <tab-control :titles="['综合','销量','价格']" class="list-tab-control" />

    <bscroll ref="scroll" class="list-scroll" @scroll="scroll" @pullUp="pullUp">
      <list-container :lists="list.lists" />
    </bscroll>

    <back-top @click.native="toTop" v-show="isShow" />
  </div>
</template>

<script>
// 引入公共组件
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabcontrol/TabControl";
import Bscroll from "components/common/bscroll/Scroll";
import BackTop from "components/content/backtop/BackTop";
// 引入子组件
import ListContainer from "./childCops/ListContainer";
// 引入方法
import { getLists } from "network/list";
export default {
  name: "List",
  components: {
    NavBar,
    TabControl,
    ListContainer,
    Bscroll,
    BackTop
  },
  data() {
    return {
      cid: null,
      list: {
        page: 0,
        lists: []
      },
      isShow: false,
      total: 0
    };
  },
  created() {
    this.cid = this.$route.query.cid;
    this.getLists(this.cid);
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
  },
  methods: {
    // 获得数据
    getLists(cid) {
      const page = this.list.page + 1;
      getLists(cid, page)
        .then(res => {
          if (this.total < res.data.message.total)
            this.total = res.data.message.total;
          this.list.lists.push(
            ...res.data.message.goods.filter(key => key.goods_small_logo != "")
          );
          this.list.page += 1;
        })
        .catch(err => {});
    },
    // 返回上一页
    back() {
      this.$router.back();
    },
    // 返回顶部
    toTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 滚动事件
    scroll(position) {
      this.isShow = -position.y > 1000;
    },
    // 上拉加载更多
    pullUp() {
      if (this.list.page >= this.total) {
        console.log("没有更多了");
      } else {
        this.getLists(this.cid);
        console.log("完成上拉加载");
        this.$refs.scroll.scroll.finishPullUp();
      }
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
    }
  }
};
</script>

<style scoped>
.back {
  line-height: 57px;
}
.list-nav {
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
.list-tab-control {
  width: 100%;
  background-color: #fff;
  border-bottom: 2px rgba(85, 85, 85, 0.507) solid;
  position: fixed;
  top: 44px;
}
.list-scroll {
  overflow: hidden;
  position: absolute;
  top: 94px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
