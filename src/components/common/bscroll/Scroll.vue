<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 引入betterscroll插件
import Bscroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    // 创建滚动对象
    this.scroll = new Bscroll(this.$refs.wrapper, {
      probeType: 3,
      pullUpLoad: true,
      click: true
    });
    // 监听滚动事件
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });
    // 监听上拉加载事件
    this.scroll.on("pullingUp", res => {
      this.$emit("pullUp");
    });
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    }
  }
};
</script>

<style scoped>
</style>