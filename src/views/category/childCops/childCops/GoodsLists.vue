<template>
  <div>
    <ul class="lists">
      <li
        v-for="(item,index) in goodsLists"
        :key="item.cat_id"
        v-cloak
        @click="goodsClick(index)"
        :class="currentIndex == index? 'currentClass':''"
      >
        <span>{{item.cat_name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GoodsLists",
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    goodsClick(index) {
      this.currentIndex = index;
      this.$emit("getContent", this.currentIndex);
    }
  },
  props: {
    goodsLists: {
      type: Array
    }
  }
};
</script>

<style>
.lists li {
  text-align: center;
  padding: 10px 5px;
}
.lists .currentClass {
  background-color: #eeeeee;
}
.lists .currentClass span {
  color: rgb(250, 91, 117);
}
.lists li span {
  font-size: 16px;
  font-family: "lucida grande", "lucida sans unicode", lucida, helvetica,
    "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  color: #333333;
}
</style>