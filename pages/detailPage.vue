<template>
  <div class="detail-container">
    <div class="logo">
      <nuxt-link to="/">
        <a href="javascript:void(0)"><img src="~/assets/images/detailPageImg/logo.png" /></a>
      </nuxt-link>
      
    </div>

    <div class="tab-block">
      <ul>
        <li 
          v-for="(item, i) in tabList" 
          :key="item.id" 
          :class="{'bt-show': activeIdx === i}"
          @click="tabClick(i)"
        >
          <span>{{item.label}}</span>
        </li>
        
      </ul>
    </div>

    <div class="dot-block">
      <ul>
        <li
          :class="{'dot-active': activeIdx === i}"
          v-for="(item, i) in tabList" 
          :key="item.id">
          <div class="s1">
            <i class="i1"></i>
          </div>
          <div class="s2">{{item.label}}</div>
        </li>

      </ul>
    </div>

    <div class="main-block">
      <transition name="Fade">	
        <detail-one 
          v-show="activeIdx === 0"
          :activeIdx='activeIdx'
        />
      </transition>

      <transition name="Fade">	
        <detail-two 
          v-show="activeIdx === 1"
        />
      </transition>

      <transition name="Fade">	
        <detail-three 
          v-show="activeIdx === 2"
        />
      </transition>

      <transition name="Fade">	
        <detail-four 
          v-show="activeIdx === 3"
        />
      </transition>

      <transition name="Fade">	
        <detail-five 
          v-show="activeIdx === 4"
        />
      </transition>
      <!-- <detail-one 
        class="main-block-item" 
        :class="{'model-show': activeIdx === 0}" 
        :activeIdx='activeIdx'
        />
      <detail-two 
        class="main-block-item" 
        :class="{'model-show': activeIdx === 1}"/>
      <detail-three 
        class="main-block-item" 
        :class="{'model-show': activeIdx === 2}"/>
      <detail-four 
        class="main-block-item" 
        :class="{'model-show': activeIdx === 3}"/>
      <detail-five 
        class="main-block-item" 
        :class="{'model-show': activeIdx === 4}"/> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'detailPage',
  data() {
    return {
      tabList: [
        { id: 0, label: '加速效果'},
        { id: 1, label: '体验升级'},
        { id: 2, label: '三端通用'},
        { id: 3, label: '新版活动'},
        { id: 4, label: '厂商福利'},
      ],
      activeIdx: 0,
      scrollFlag: true
    };
  },

  created () {
    // this.getInfoList()
  },

  methods: {
    // tab 切换
    tabClick(idx) {
      this.activeIdx = idx
    },

    // 鼠标滚动事件
    onMouseWheel(ev_a) {
      if(this.scrollFlag) {
        this.scrollFlag = false
        
        setTimeout(() => {
          this.scrollFlag = true
        }, 1500);

        let ev = ev_a || window.event;
        let down = true; // 定义一个标志，当滚轮向下滚时，执行一些操作
            down = ev.wheelDelta ? ev.wheelDelta < 0 : ev.detail > 0;
        if(down) { // 鼠标向下滑动
          if(this.activeIdx < 4) this.activeIdx = this.activeIdx + 1
        } else { // 鼠标向上滑动
          if(this.activeIdx > 0 && this.activeIdx <= 4) this.activeIdx = this.activeIdx - 1
        }

        if(ev.preventDefault) {/*FF 和 Chrome*/
          ev.preventDefault();// 阻止默认事件
        }
        return false;
      }

      
    },

    // 兼容不同浏览器
    addEvent(obj,xEvent,fn) {
      if(obj.attachEvent){
          obj.attachEvent('on' + xEvent, fn);
      } else {
          obj.addEventListener(xEvent, fn, false);
      }
    },
    
  },

  components: {
    // Button, 
  },

  mounted () {
    let oDiv = document.querySelector('.detail-container');
    this.addEvent(oDiv,'mousewheel', this.onMouseWheel);
    this.addEvent(oDiv,'DOMMouseScroll', this.onMouseWheel);
  }
};
</script>

<style scoped lang="scss">
  .detail-container {
    position: fixed;
    width: 100%;
    height: 100%;
    background: url('../assets/images/detailPageImg/bgi.png') no-repeat;
    background-size: 100% 100%;

    .logo {
      position: absolute;
      left: 102px;
      top: 27px;
      img {
        width: 137px;
        height: 39px;
      }
    }

    .tab-block {
      width: 40%;
      margin: auto;
      height: 8%;
      ul {
        list-style: none;
        display: flex;
        li {
          width: 20%;
          height: 78px;
          line-height: 78px;
          text-align: center;
          box-sizing: border-box;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
        }

        .bt-show {
          border-bottom: 3px solid #27CB8E;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%);
          color: rgba(3, 203, 142, 1);
        }
      }
     
    }

    .dot-block {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 102px;
      ul {
        list-style: none;
        li {
          display: flex;
          height: 15px;
          line-height: 15px;
          .s1 {
            position: relative;
            width: 8px;
            
            .i1, .i2 {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              height: 0px;
              border: 1px solid #707070;
              color: rgba(112, 112, 112, 1);
            }

            .i1 {
              display: block;
              width: 8px;
              transition: all 1s;
            }

          }

          .s2 {
            display: none;
            margin-left: 12px;
            font-size: 11px;
            color: rgba(255, 255, 255, .7);
          }

          
        }

        .dot-active {
          .s1 {
            width: 23px;
            .i1 {
              width: 23px;
              transition: all 1s linear;
            }
          }

          .s2 {
            display: block;
          }
        }

      }
    }

    .main-block {
      // position: absolute;
      // top: 50%;
      // left: 50%;
      // transform: translate(-50%, -50%);
      // height: 60%;
      margin-top: 72px;
      height: 92%;

      // &-item {
      //   opacity: 0;
      //   height: 0;
      //   transition: all 1s;
      // }

      // .model-show {
      //   height: 100%;
      //   opacity: 1;
      //   transition: all 1s;
      // }
    }
    
  }

  .Fade-enter,
  .Fade-leave-to {
    opacity: 0;
  }
  .Fade-enter-to,
  .Fade-leave {
    opacity: 1;
  }

  .Fade-enter-active,
  .Fade-leave-active {
    transition: all .5s linear;
  }

  
</style>