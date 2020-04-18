<template>
  <div>
    <ul class="cart-list">
      <li v-for="(item,index) in cartList" :key="index">
        <div class="checkbox">
          <img
            src="~assets/img/checkbox.png"
            alt
            v-show="!item.checked"
            width="24px"
            @click="changeChecked(index)"
          />
          <img
            src="~assets/img/checkbox1.png"
            alt
            v-show="item.checked"
            width="24px"
            @click="changeChecked(index)"
          />
        </div>
        <img :src="item.goodsImg" alt class="img" />
        <span class="name">{{item.goodsName}}</span>
        <div class="price">
          <p>￥{{item.goodsPrice}}</p>
          <p class="count">{{item.count}}件</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CartList",
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    changeChecked(index) {
      this.$store.state.cartList[index].checked = !this.$store.state.cartList[
        index
      ].checked;
      this.$store.commit("getTotalPrice");
    }
  }
};
</script>

<style scoped>
.cart-list li {
  padding: 5px 10px;
  width: 100vw;
  display: flex;
  border-bottom: 1px #888 solid;
}
.cart-list #ipt {
  display: none;
}
.cart-list .checkbox {
  display: inline-block;
  overflow: hidden;
  margin-top: 30px;
}
.cart-list .img {
  width: 80px;
  height: 80px;
}
.cart-list .name {
  width: 50vw;
  height: 35px;
  margin-top: 20px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.cart-list .price {
  margin-top: 20px;
  color: rgb(226, 60, 60);
  font-size: 18px;
  text-align: center;
}
.count {
  font-size: 14px;
  color: #555;
}
</style>