<template>
  <div class="detail-four-container">
    <div class="title-txt">福利升级  &nbsp;&nbsp;一起瓜分百万现金</div>
    <div class="subtitle-txt">拼团！更划算！2人即可成团，瓜分现金红包</div>
    <div class="img-row">
      <img class="img1" src="~/assets/images/detailPageImg/four-gif.png" alt="">

      <div class="btn1" v-if="btnFlag" @click="btnClick">立即参与</div>
      <div class="btn2" v-if="!btnFlag">敬请期待</div>
    </div>

    <!-- <div class="btn-row">
      <div class="btn1" v-if="btnFlag" @click="btnClick">立即参与</div>
      <div class="btn2" v-if="!btnFlag">敬请期待</div>
    </div> -->
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: {
  },
  name: 'detailFour',
  data() {
    return {
      btnFlag: true,
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
        group: 'fulicanyu'
      });
      if(data && data.length > 0) this.jumpUrl = data[0].url
    },

    btnClick() {
      this.jumpUrl && window.open(this.jumpUrl)
    }
  },
};
</script>

<style scoped lang="scss">
@import '../assets/style/detailFour.scss'
</style>