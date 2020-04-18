<template>
  <div class="floor">
    <div v-for="(item,index) in floors" :key="index">
      <img :src="item.floor_title.image_src" alt />
      <div>
        <ul class="floor-list">
          <li v-for="(good, key) in item.product_list" :key="key">
            <img :src="good.image_src" alt @click="toList(good.navigator_url.split('=')[1])" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFloor",
  props: {
    floors: {
      type: Array
    }
  },
  methods: {
    toList(query) {
      this.$router.push({
        path: "/list",
        query: {
          query
        }
      });
    }
  }
};
</script>

<style>
.floor {
  overflow: hidden;
}
.floor > div {
  margin-top: 10px;
}
.floor-list li {
  float: left;
  display: block;
  width: 120px;
  height: 100px;
  margin: 0 10px 10px 0;
}
.floor-list li img {
  width: 120px;
  height: 100px;
}
.floor-list li:nth-child(1) {
  float: left;
  display: block;
  width: 120px;
  height: 210px;
}
.floor-list li:nth-child(1) img {
  width: 120px;
  height: 210px;
}
</style>