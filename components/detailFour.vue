<template>
  <div class="detail-four-container">
    <div class="title-txt">福利升级  &nbsp;&nbsp;一起瓜分百万现金</div>
    <div class="subtitle-txt">拼团！更划算！1人即可成团，瓜分现金红包</div>
    <div class="img-row">
      <img class="img1" src="~/assets/images/detailPageImg/four-gif.png" alt="">
    </div>

    <div class="btn-row">
      <div class="btn1" v-if="btnFlag">立即参与</div>
      <div class="btn2" v-if="!btnFlag">敬请期待</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
  },
  name: 'detailFour',
  data() {
    return {
      btnFlag: true
    };
  },
  methods: {
    // test() {
    //   return 0;
    // }
  },
};
</script>

<style scoped lang="scss">
@import '../assets/style/detailFour.scss'
</style>