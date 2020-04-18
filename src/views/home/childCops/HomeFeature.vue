<template>
  <div class="feature">
    <a href="javascript:;" @click="search">
      <img src="~assets/img/home/recommend_bg.jpg" alt />
    </a>
  </div>
</template>

<script>
export default {
  name: "Feature",
  methods: {
    search() {
      this.$router.push({
        path: "/list",
        query: {
          cid: 927
        }
      });
    }
  }
};
</script>
  
<style>
.feature img {
  width: 100%;
}
</style>