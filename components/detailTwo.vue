<template>
  <div class="detail-tow-container">
    <div class="title-txt">全新体验升级</div>
    <div class="subtitle-txt">操作一键直达，让界面信息更加聚集</div>
    <div class="img-row">
      <img class="img1" src="~/assets/images/detailPageImg/tow-lf-rg.png" alt="">
      <img class="img2" src="~/assets/images/detailPageImg/client.gif" alt="">
      <img class="img3" src="~/assets/images/detailPageImg/tow-lf-rg.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    abc: {
      type: [String, Number],
    }
  },
  name: 'detailTwo',

  data() {
    return {
      //id:1
    };
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
@import '../assets/style/detailTwo.scss'
</style>