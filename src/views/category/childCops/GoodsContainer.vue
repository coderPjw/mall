<template>
  <div>
    <goods-lists class="goods-lists" :goodsLists="goodsLists" @getContent="getContent" />
    <goods-content class="goods-content" :goodsContent="goodsContent" />
  </div>
</template>

<script>
// 引入子组件
import GoodsLists from "./childCops/GoodsLists";
import GoodsContent from "./childCops/GoodsContent";

// 引入方法
import { getCategories } from "network/category";

export default {
  name: "GoodsContainer",
  components: {
    GoodsLists,
    GoodsContent
  },
  data() {
    return {
      goodsLists: [],
      goodsContent: []
    };
  },
  created() {
    this.getCategories();
  },
  methods: {
    // 请求列表数据
    getCategories() {
      getCategories().then(res => {
        this.goodsLists = res.data.message;
        // 默认请求第一个数据
        this.goodsContent = this.goodsLists[0].children;
      });
    },
    // 获得当前index 并请求内容数据
    getContent(index) {
      this.goodsContent = this.goodsLists[index].children;
      document.querySelector(".goods-content").scrollTo(0, 0);
    }
  }
};
</script>

<style>
.goods-lists {
  width: 22%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  background-color: #ffffff;
  float: left;
  border-right: 1px solid transparent;
  border-image: linear-gradient(#ffffff, #0000006b, #ffffff) 20;
  position: relative;
}

.goods-content {
  width: 78%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  float: left;
}
</style>