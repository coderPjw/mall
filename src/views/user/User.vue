<template>
  <div class="user">
    <login />
    <info />
  </div>
</template>

<script>
import Login from "./childCops/Login";
import Info from "./childCops/Info";
export default {
  name: "User",
  components: {
    Login,
    Info
  }
};
</script>

<style scoped>
.user {
  background-color: #eeeeee8c;
  height: calc(100vh - 49px);
  overflow: hidden;
}
</style>
