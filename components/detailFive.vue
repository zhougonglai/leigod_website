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
        height="70%"
        @change="swiperChange"
        >
        <el-carousel-item v-for="(item, i) in imges" :key="i">
          <img class="img1" :src="item.url" alt="">
          <!-- <img class="img2" :src="item.logo" alt=""> -->
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
        {
          url: require("~/assets/images/detailPageImg/swiper/pubg.png"), 
          logo: require("~/assets/images/detailPageImg/swiper/pubg-logo.png")
        },
        {
          url: require("~/assets/images/detailPageImg/swiper/穿越火线.png"),
          logo: require("~/assets/images/detailPageImg/swiper/cyhx-logo.png")
        },
        {
          url: require("~/assets/images/detailPageImg/swiper/虎牙 2.png"),
          logo: require("~/assets/images/detailPageImg/swiper/huya-logo.png")
        },
        {
          url: require("~/assets/images/detailPageImg/swiper/剑网3.png"),
          logo: require("~/assets/images/detailPageImg/swiper/jw-logo.png")
        },
        {
          url: require("~/assets/images/detailPageImg/swiper/九阴真经.png"),
          logo: require("~/assets/images/detailPageImg/swiper/jyzj-logo.png")
        },
        {
          url: require("~/assets/images/detailPageImg/swiper/守望先锋11.png"),
          logo: require("~/assets/images/detailPageImg/swiper/swxf-logo.png")
        },
      ],
      activeIdx: -1
    };
  },
  methods: {
    swiperChange(idx) {
      this.activeIdx = idx
    }
  },
  mounted () {
    console.log(11, document.querySelector('.el-carousel__mask'));
  }
};
</script>

<style scoped lang="scss">
@import '../assets/style/detailFive.scss'
</style>