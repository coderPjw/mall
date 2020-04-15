<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      @click="
selected(index)"
      :class="index === currentIndex ? 'current' : ''"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    selected(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  height: 50px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
}
.tab-control-item {
  flex: 1;
}
.current {
  color: pink;
}
.current span {
  border-bottom: 3px rgb(241, 121, 141) solid;
  padding-bottom: 5px;
}
</style>