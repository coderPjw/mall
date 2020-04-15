<template>
  <div class="exhibition-item">
    <img
      v-lazy="goodsItem.goods_small_logo"
      alt
      @load="imgLoad"
      @click="toDetail(goodsItem.goods_id)"
    />
    <p>{{goodsItem.goods_name}}</p>
    <p>￥{{goodsItem.goods_price}}</p>
  </div>
</template>

<script>
export default {
  name: "ExhibitionItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("imgLoad");
    },
    toDetail(goods_id) {
      this.$router.push({
        path: "/detail",
        query: {
          goods_id
        }
      });
    }
  }
};
</script>

<style>
.exhibition-item {
  padding: 5px 3px;
  text-align: center;
  width: 45%;
}
.exhibition-item > img {
  border-radius: 10px;
  width: 100%;
}
.exhibition-item > p:nth-child(2) {
  width: 160px;
  padding-left: 20px;
  font-size: 12px;
  color: rgb(61, 61, 61);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.exhibition-item > p:nth-child(3) {
  color: rgb(236, 112, 133);
}
</style>