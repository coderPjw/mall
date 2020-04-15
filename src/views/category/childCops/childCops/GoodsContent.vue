<template>
  <div>
    <ul class="content-container">
      <li v-for="item in goodsContent" :key="item.cat_id">
        <p>
          <span>---------------{{item.cat_name}}---------------</span>
        </p>
        <a
          href="javascript:;"
          v-for="itarget in item.children"
          :key="itarget.cat_id"
          @click="toList(itarget.cat_id)"
        >
          <img v-lazy="itarget.cat_icon" alt width="80px" height="80px" />
          <p>{{itarget.cat_name}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GoodsContent",
  props: {
    goodsContent: {
      type: Array
    }
  },
  methods: {
    toList(cid) {
      this.$router.push({
        path: "/list",
        query: {
          cid
        }
      });
    }
  }
};
</script>

<style>
.content-container {
  padding: 2px 2px;
}
.content-container li {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  line-height: 1.5;
  text-align: center;
  margin-top: 20px;
}

.content-container li > p {
  width: 100%;
}
.content-container li > p > span {
  padding: 2px;
  font-weight: 600;
}

.content-container li > a {
  flex: 1;
  font-size: 14px;
  padding: 2px 2px;
}
</style>