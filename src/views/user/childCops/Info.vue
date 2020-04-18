<template>
  <div>
    <div class="collection">
      <div>
        <p>0</p>
        <p>店铺关注</p>
      </div>
      <div>
        <p>0</p>
        <p>商品关注</p>
      </div>
      <div>
        <p>0</p>
        <p>我的足迹</p>
      </div>
    </div>
    <p class="title">我的订单</p>
    <div class="order">
      <div>
        <p>
          <img src="~assets/img/order.png" alt width="24px" />
        </p>
        <p>全部订单</p>
      </div>
      <div>
        <p>
          <img src="~assets/img/wallet.png" alt width="24px" />
        </p>
        <p>待付款</p>
      </div>
      <div>
        <p>
          <img src="~assets/img/truck.png" alt width="24px" />
        </p>
        <p>代发货</p>
      </div>
      <div>
        <p>
          <img src="~assets/img/repair.png" alt width="24px" />
        </p>
        <p>售后/维修</p>
      </div>
    </div>
    <p class="title">收货地址管理</p>
    <div class="service">
      <p class="title">联系客服</p>
      <p class="title">意见反馈</p>
      <p class="title">关于</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info"
};
</script>

<style scoped>
.collection {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90vw;
  height: 50px;
  box-sizing: border-box;
  margin: auto;
  padding: 5px 0;
  background-color: #fff;
  position: relative;
  top: -20px;
}
.collection > div,
.order > div {
  margin: 0 10px;
  font-size: 14px;
}
.collection > div > p,
.order > div > p {
  text-align: center;
}
.collection > div > p:nth-child(1) {
  color: rgb(252, 96, 96);
  font-size: 16px;
}
.order {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90vw;
  height: 50px;
  box-sizing: border-box;
  margin: auto;
  padding: 5px 0;
  background-color: #fff;
}
.title {
  width: 90vw;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  padding-left: 10px;
  margin: 5px auto 1px;
  background-color: #fff;
}
.service {
  position: absolute;
  bottom: 100px;
  left: 0;
  right: 0;
}
</style>