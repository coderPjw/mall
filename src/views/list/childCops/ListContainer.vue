<template>
  <div class="ListContainer">
    <ul>
      <li
        v-for="(item, index) in lists"
        :key="index"
        class="listItem"
        @click="click(item.goods_id)"
      >
        <img v-lazy="item.goods_small_logo" alt :key="item.goods_id" @load="imgLoad" />
        <div>
          <p class="name">{{item.goods_name}}</p>
          <p class="price">￥{{item.goods_price}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListContainer",
  props: {
    lists: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    click(goods_id) {
      this.$router.push({
        path: "/detail",
        query: {
          goods_id
        }
      });
    },
    imgLoad() {
      this.$bus.$emit("imgLoad");
    }
  }
};
</script>

<style scoped>
.ListContainer {
  width: 100vw;
}
.listItem {
  display: flex;
  justify-content: space-around;
  width: 100vw;
  padding: 10px 0;
  border-bottom: 1px solid rgb(201, 201, 201);
}
.listItem > img {
  width: 160px;
  height: 150px;
}
.listItem > div {
  width: 50%;
}

.listItem .name {
  color: rgb(37, 37, 37);
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.listItem .price {
  color: rgb(238, 102, 102);
  margin-top: 20px;
}
</style>