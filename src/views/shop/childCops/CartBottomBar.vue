<template>
  <div class="bottom-bar">
    <img
      src="~assets/img/checkbox.png"
      alt
      width="24px"
      v-show="!totalChecked"
      @click="changeTotalChecked(totalChecked)"
    />
    <img
      src="~assets/img/checkbox1.png"
      alt
      width="24px"
      v-show="totalChecked"
      @click="changeTotalChecked(totalChecked)"
    />
    <span class="check-all">全选</span>
    <span class="total-price-title">合计：</span>
    <span class="total-price">￥{{this.$store.state.totalPrice}}</span>
    <span class="purchase">去结算</span>
  </div>
</template>

<script>
export default {
  name: "CartBottomBar",
  data() {
    return {
      totalPrice: 0
    };
  },
  computed: {
    totalChecked() {
      if (this.$store.state.cartList.length === 0) return false;
      return !this.$store.state.cartList.find(res => !res.checked);
    }
  },
  methods: {
    changeTotalChecked(totalChecked) {
      totalChecked = !totalChecked;
      this.$store.state.cartList.forEach(res => {
        res.checked = totalChecked;
      });
      this.$store.commit("getTotalPrice");
    }
  }
};
</script> 

<style scoped>
.bottom-bar {
  position: relative;
  width: 100vw;
  height: 40px;
  box-shadow: 0 0 3px #777;
  line-height: 40px;
}
.bottom-bar > img {
  position: absolute;
  top: 7px;
  left: 10px;
}
.bottom-bar .check-all {
  position: absolute;
  left: 35px;
}
.bottom-bar .total-price-title {
  position: absolute;
  left: 80px;
}
.bottom-bar .total-price {
  position: absolute;
  left: 145px;
  font-size: 20px;
  font-weight: 600;
  color: #e4393c;
}
.bottom-bar .purchase {
  display: inline-block;
  position: absolute;
  right: 0;

  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  background-color: rgb(255, 174, 0);
}
</style>