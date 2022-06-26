<style scoped lang="less"></style>
<template>
  <div class="detail-one-container">
    <div class="title-txt">强劲性能  &nbsp;&nbsp;更快更稳</div>
    <div class="subtitle-txt">
      <div class="txt1" :class="{'bgc-active-1':imgSwitch === 1}">双引擎</div>
      <div class="txt2" :class="{'bgc-active-2':imgSwitch === 2}">AI智能节点</div>
    </div>

    <div class="img-row">
      <div class="gif1" v-show="imgSwitch === 1" >
        <img class="img1" src="~/assets/images/detailPageImg/one-gif.png" alt="">
        <img class="img2" src="~/assets/images/detailPageImg/one-gif.png" alt="">
      </div>

      <div class="gif2" v-show="imgSwitch === 2">
        <img class="img3" src="~/assets/images/detailPageImg/one-gif2.png" alt="">
      </div>
    </div>

    <div class="btn-row">
      <div class="btn">免费试用</div>

      <div class="icon-row">
        <div class="item">
          <i></i>
          <img src="~/assets/images/detailPageImg/down-icon.png" alt="">
        </div>
        
      </div>
    </div>

    <!-- <div class="icon-row">
      <div class="item">
        <i></i>
        <img src="~/assets/images/detailPageImg/down-icon.png" alt="">
      </div>
      
    </div> -->
  </div>

  
</template>
<script>
let timer = null
export default {
  props: {
    activeIdx: {
      type: [String, Number],
    }
  },
  name: 'detailOne',
  watch: {
    activeIdx: {
      handler(val) {
        if(val !== 0) {
          clearInterval(timer)
          this.imgSwitch = 1
        } else {
          this.startTimer()
        }
      }
    }
  },
  data() {
    return {
      imgSwitch: 1
    };
  },
  methods: {
    startTimer() {
      timer = setInterval(() => {
        if(this.imgSwitch === 1) return this.imgSwitch = 2
        if(this.imgSwitch === 2) return this.imgSwitch = 1
      }, 2000);
    }
  },
  mounted () {
    this.startTimer()
  }
};
</script>

<style scoped lang="scss">
@import '../assets/style/detailOne.scss'
</style>