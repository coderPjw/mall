<template>
  <div class="login">
    <div class="login-logo">
      <img src="~assets/img/login.png" alt />
      <p>登录</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped>
.login {
  display: flex;
  width: 100vw;
  height: 30vh;
  justify-content: center;
  align-items: center;
  background-color: rgb(253, 177, 189);
}
.login-logo > p {
  text-align: center;
  color: #fff;
  font-size: 16px;
}
</style>