<template>
  <div class="nav">
    <div v-for="(item, index) in navs" :key="index">
      <a href="javascript:;">
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