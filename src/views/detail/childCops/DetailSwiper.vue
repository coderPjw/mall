<template>
  <swiper>
    <swiper-item v-for="item in goodsDetailImg" :key="item.pics_id">
      <a href="javascript:;">
        <img v-lazy="item.pics_mid" alt />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "DetailSwiper",
  props: {
    goodsDetailImg: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
</style>