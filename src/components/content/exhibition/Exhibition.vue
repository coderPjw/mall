<template>
  <div class="exhibition">
    <exhibition-item v-for="(item, index) in goods" :key="index" :goodsItem="item" />
  </div>
</template>

<script>
// 引入子组件
import ExhibitionItem from "./ExhibitionItem";
export default {
  name: "Exhibition",
  components: {
    ExhibitionItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.exhibition {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: space-around;
}
</style>