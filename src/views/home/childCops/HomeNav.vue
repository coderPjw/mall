<template>
  <div class="nav">
    <div v-for="(item, index) in navs" :key="index">
      <a href="javascript:;" @click="toCategory">
        <img v-lazy="item.image_src" width="80px" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNav",
  props: {
    navs: {
      type: Array
    }
  },
  methods: {
    toCategory() {
      this.$router.push("/category");
    }
  }
};
</script>

<style>
.nav {
  display: flex;
  font-size: 14px;
  padding: 5px 0 25px;
  border-bottom: 10px #eee solid;
}
.nav > div {
  flex: 1;
  text-align: center;
}
</style>