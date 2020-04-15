<template>
  <div class="detail-nav-bar">
    <div class="service">
      <img src="~assets/img/service.png" alt width="16px" />
      <p>联系客服</p>
    </div>
    <div class="store">
      <img src="~assets/img/store.png" alt width="16px" />
      <p>店铺</p>
    </div>
    <div class="shop">
      <img src="~assets/img/shop.png" alt width="16px" @click="toShopCart" />
      <p>购物车</p>
    </div>
    <div class="toShop" @click="addToCart">
      <p>加入购物车</p>
    </div>
    <div class="buy">
      <p>立即购买</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailNavBar",
  methods: {
    addToCart() {
      this.$emit("addToCart");
    },
    toShopCart() {
      this.$router.push({
        path: "/shop"
      });
    }
  }
};
</script>

<style scoped>
.detail-nav-bar {
  width: 100vw;
  height: 49px;
  display: flex;
  justify-content: space-around;
  font-size: 12px;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.detail-nav-bar > div {
  text-align: center;
  padding: 7px 0;
  margin: 0 10px;
  line-height: 1.5;
}
.detail-nav-bar > div > img {
  margin: 0 auto;
}
.detail-nav-bar .service,
.detail-nav-bar .store,
.detail-nav-bar .shop {
  width: 14%;
  text-align: center;
}
.detail-nav-bar .toShop,
.detail-nav-bar .buy {
  width: 24%;
}
.detail-nav-bar .toShop p,
.detail-nav-bar .buy p {
  margin-top: 5px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  border-radius: 30px;
}
.detail-nav-bar .toShop p {
  background-color: #e4393c;
}
.detail-nav-bar .buy p {
  background-color: rgb(255, 174, 0);
}
</style>