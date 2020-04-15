<template>
  <div>
    <nav-bar class="detail-nav">
      <div slot="left" @click="back">
        <img src="~assets/img/back.png" alt width="24px" />
      </div>
      <div slot="center">商品详情</div>
    </nav-bar>
    <bscroll class="detail-scroll" ref="scroll" @scroll="scroll">
      <detail-swiper :goodsDetailImg="goodsDetailImg" />
      <detail-information
        :goodsName="goodsName"
        :goodsPrice="goodsPrice"
        :goodsIntroduce="goodsIntroduce"
      />
    </bscroll>
    <div class="addSucces" v-show="isAddShow">
      <p>添加成功~</p>
    </div>
    <back-top class="back-top" v-show="isBackShow" @click.native="backTop" />
    <detail-nav-bar @addToCart="addToCart" />
  </div>
</template>

<script>
// 引入公共组件
import NavBar from "components/common/navbar/NavBar.vue";
import Bscroll from "components/common/bscroll/Scroll";
import BackTop from "components/content/backtop/BackTop";
// 引入子组件
import DetailSwiper from "./childCops/DetailSwiper";
import DetailInformation from "./childCops/DetailInformation";
import DetailNavBar from "./childCops/DetailNavBar";

import { getGoodsDetail } from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      goodsId: 0,
      goodsDetailImg: [],
      goodsName: "",
      goodsPrice: 0,
      goodsIntroduce: "",
      isBackShow: false,
      isAddShow: false
    };
  },
  components: {
    NavBar,
    Bscroll,
    DetailSwiper,
    DetailInformation,
    DetailNavBar,
    BackTop
  },
  created() {
    this.goodsId = this.$route.query.goods_id;
    this.getGoodsDetail(this.goodsId);
  },
  methods: {
    getGoodsDetail(id) {
      getGoodsDetail(id).then(res => {
        this.goodsDetailImg = res.data.message.pics;
        this.goodsName = res.data.message.goods_name;
        this.goodsPrice = res.data.message.goods_price;
        this.goodsIntroduce = res.data.message.goods_introduce;
      });
    },
    back() {
      this.$router.back();
    },
    scroll(position) {
      if (-position.y > 2000) {
        this.isBackShow = true;
      } else {
        this.isBackShow = false;
      }
    },
    backTop() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    // 监听点击加入购物车事件
    addToCart() {
      // 显示添加成功提示
      this.isAddShow = true;
      setTimeout(() => {
        this.isAddShow = false;
      }, 1500);
      // 保存展示的信息到一个对象里面
      const product = {};
      product.goodsId = this.goodsId;
      product.goodsImg = this.goodsDetailImg[0].pics_sma;
      product.goodsName = this.goodsName;
      product.goodsPrice = this.goodsPrice;
      // 提交数据到vuex 通过commit提交到mutations来修改state里面的数据
      this.$store.commit("addCart", product);
    }
  }
};
</script>

<style scoped>
.detail-nav {
  background-color: #e4393c;
  font-family: "雅黑";
  line-height: 44px;
}
.detail-nav img {
  margin-top: 10px;
}

.detail-scroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
.back-top {
  position: fixed;
  right: 15px;
  bottom: 55px;
  z-index: 10;
}
.addSucces {
  width: 200px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.815);
  border-radius: 20px;

  color: #fff;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  z-index: 10;
}
</style>