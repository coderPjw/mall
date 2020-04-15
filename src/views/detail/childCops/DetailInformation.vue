<template>
  <div class="information">
    <p class="goods-price">￥{{goodsPrice}}</p>
    <div class="goods-title">
      <span class="goods-name">{{goodsName}}</span>
      <span class="collection">
        <a href="javascript:;" @click="toggleCollect" v-show="!isCollect">
          <img src="~assets/img/collect.png" alt />
          <p>收藏</p>
        </a>
        <a href="javascript:;" v-show="isCollect" @click="toggleCollect">
          <img src="~assets/img/collect1.png" alt />
          <p>已收藏</p>
        </a>
      </span>
    </div>
    <div class="info-container">
      <p class="info-title">图文详情</p>
      <p v-html="goodsIntroduce"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInformation",
  data() {
    return {
      isCollect: false
    };
  },
  props: {
    goodsName: String,
    goodsPrice: Number,
    goodsIntroduce: String
  },
  methods: {
    toggleCollect() {
      this.isCollect = !this.isCollect;
    }
  }
};
</script>

<style scoped>
.information {
  padding: 10px 20px;
  line-height: 1.5;
}
.goods-price {
  color: #e4393c;
  font-family: "Times New Roman", Times, serif;
  font-size: 26px;
}
.goods-title {
  display: flex;
}
.goods-name {
  width: 70%;
  box-sizing: border-box;
  padding-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  border-right: 1px solid rgb(94, 94, 94);
}
.collection {
  box-sizing: border-box;
  width: 30%;
  padding-left: 10px;
  text-align: center;
}

.collection a {
  overflow: hidden;
  font-size: 12px;
}
.collection a > img {
  display: block;
  margin: 0 auto;
}
.info-container {
  overflow: hidden;
  background-color: #eee;
  margin-top: 10px;
}
.info-title {
  margin: 10px 0;
  padding: 0 10px;
  font-size: 26px;
  font-weight: 700;
  text-align: left;
  line-height: 1.5;
  color: #e4393c;
  background-color: #fff;
}
</style>