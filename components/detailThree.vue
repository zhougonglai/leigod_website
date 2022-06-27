<template>
  <div class="detail-three-container">
    <div class="title-txt">加速时长 &nbsp;&nbsp;四端通用</div>
    <div class="subtitle-txt">PC/移动/主机/路由器 四端时长互通</div>
    <div class="main-img">
      <div class="main-img-warp">
        <img class="center-img" src="~/assets/images/detailPageImg/three-center.png" alt="">
        <img class="center-img-static" src="~/assets/images/detailPageImg/three-center-static.png" alt="">
        
        <div class="play-quan"></div>

        <img class="img1" src="~/assets/images/detailPageImg/tell.png" alt="">
        <img class="img2" src="~/assets/images/detailPageImg/computer.png" alt="">
        <img class="img3" src="~/assets/images/detailPageImg/box1.png" alt="">
        <img class="img4" src="~/assets/images/detailPageImg/box2.png" alt="">
        <img class="xian" src="~/assets/images/detailPageImg/xian.png" alt="">
        <div class="txt">雷神加速盒</div>

        <div class="btn" @click="goBuy">立即购买</div>

        <img class="img5" src="~/assets/images/detailPageImg/play-phone.png" alt="">
        <img class="bowen" src="~/assets/images/detailPageImg/bowen.png" alt="">

        
      </div>

    </div>

    
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'detailThree',
  data() {
    return {
      jumpUrl: ''
    };
  },
  created () {
    this.getInfoList()
  },
  methods: {
    ...mapActions(['getDownload']),

    async getInfoList() {
      let data = await this.getDownload({
        group: 'boxgoumai'
      });
      if(data && data.length > 0) this.jumpUrl = data[0].url
    },

    goBuy() {
      this.jumpUrl && window.open(this.jumpUrl)
    }
  },
};
</script>

<style scoped lang="scss">
@import '../assets/style/detailThree.scss'
</style>