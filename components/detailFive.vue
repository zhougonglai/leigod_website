<template>
  <div class="detail-five-container">
    <div class="title-txt">跨界合作  &nbsp;&nbsp;拥抱多元</div>
    <div class="subtitle-txt">更多游戏厂商/直播平台福利活动，敬请期待</div>
    <div class="img-row">
      <el-carousel 
        class="swiper" 
        arrow="never" 
        indicator-position="none"  
        :interval="2500" 
        type="card" 
        height="299px"
        >
        <el-carousel-item v-for="(item, i) in imges" :key="i">
          <img :src="item.url" alt="">
        </el-carousel-item>
      </el-carousel>

      <!-- <div class="bgc-card"></div> -->
    </div>

  </div>
</template>
<script>
import Vue from 'vue';
import { Carousel, CarouselItem } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(CarouselItem);
Vue.use(Carousel);

export default {
  props: {
  },
  name: 'detailFive',
  data() {
    return {
      btnFlag: true,
      imges: [
        {url: require("~/assets/images/detailPageImg/123.jpeg")},
        {url: require("~/assets/images/detailPageImg/123.jpeg")},
        {url: require("~/assets/images/detailPageImg/123.jpeg")},
        {url: require("~/assets/images/detailPageImg/123.jpeg")},
        {url: require("~/assets/images/detailPageImg/123.jpeg")},
      ]
    };
  },
  methods: {
  },
  mounted () {
  }
};
</script>

<style scoped lang="scss">
@import '../assets/style/detailFive.scss'
</style>