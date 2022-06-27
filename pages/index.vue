<template lang="pug">
main.flex.flex-col.items-center.h-screen
  header.w-screen.flex.h-20.px-10.absolute.z-10
    nav.inline-flex
      transition(
        enter-class="transform scale-0"
        enter-active-class="transition"
        enter-to-class="transform scale-1"
        leave-class="transform scale-1"
        leave-active-class="transition"
        leave-to-class="transform scale-0"
      )
        nuxt-link.py-5(to="/" v-show="timeline.logo")
          img(src="~/assets/images/page1/logo.png" alt="logo" width="148" height="41")
    .flex-1
    nav.inline-flex(ref="nav" v-show="timeline.nav")
      button.nav-link.w-28.text-center.text-white.opacity-60(class="hover:opacity-100" v-if="timeline.target" @click="resetAnime") 重播
      nuxt-link.nav-link.w-28.text-white.opacity-60.inline-flex.items-center.justify-center(class="hover:opacity-100" active-class="opacity-100" to="/") 首页
      button.nav-link.w-28.text-center.text-white.opacity-60(class="hover:opacity-100") 加速盒
      button.nav-link.w-28.text-center.text-white.opacity-60(class="hover:opacity-100") 活动
      button.nav-link.w-28.text-center.text-white.opacity-60(class="hover:opacity-100") 帮助中心
      button.nav-link.w-28.text-center.text-white.opacity-60(class="hover:opacity-100") 网吧商家版
      button.nav-link.w-28.text-center.text-white.opacity-60(class="hover:opacity-100") 游戏资讯
      .user-agent.text-white.px-20.inline-flex
        button.login.relative.px-5.opacity-60(class="hover:opacity-100") 登录
        button.register.px-5.opacity-60(class="hover:opacity-100") 注册
        button.icon.px-5.flex.items-center.justify-center(@mouseenter="showTools()" @click="showTools()" @mouseleave="showTools(false)")
          img(v-if="logAgent.status" src="@/assets/images/page3/header-more_active.png")
          img(v-else src="@/assets/images/page3/header-more.png")
          transition(
            enter-class="scale-0"
            enter-active-class="transition transform duration-300 origin-top"
            enter-to-class="scale-1"
            leave-class=" scale-1"
            leave-active-class="transition transform duration-300 origin-top"
            leave-to-class="scale-0"
          )
            #tools.absolute.rounded-lg.py-2.top-full(v-show="logAgent.status")
              ul
                li.py-2.px-5.opacity-60(class="hover:opacity-100 hover:bg-gray-600") 充值时常
                li.py-2.px-5.opacity-60(class="hover:opacity-100 hover:bg-gray-600") 雷神公益
                li.py-2.px-5.opacity-60(class="hover:opacity-100 hover:bg-gray-600") 官方公告
                li.py-2.px-5.opacity-60(class="hover:opacity-100 hover:bg-gray-600") 关于雷神

  section.absolute.inset-0.flex.items-center.justify-center.flex-col.h-screen.w-screen.overflow-hidden
    img.absolute.circle-1.animate-pulse(v-show="timeline.circle1" ref="circle1" src="@/assets/images/page1/circle-1.png" )
    img.absolute.circle-2.animate-pulse(v-show="timeline.circle2" ref="circle2" src="@/assets/images/page1/circle-2.png" style="animation-delay: .5s;")
    #circle.absolute.inset-y-0.z-10(v-show="timeline.circle" ref="circle")
      img.object-center.object-contain(src="@/assets/images/page1/apng/circle.png")
    #time-1.absolute(ref="title1" v-show="timeline.title1")
      img.t-1(src="@/assets/images/page1/logo-title.png")
    #bubble.rounded-full.absolute.w-40.h-40.z-10(v-show="timeline.bubble" ref='bubble')
    #bg.absolute.inset-x-0.bottom-0(v-show="timeline.bg" ref="bg")
      img.bg(src="@/assets/images/page3/Apng/3–1_00000_iSpt.png")
      img.light.absolute.animate-bouncing.top-0(src="@/assets/images/page3/light.png")
    #logo.flex-1.flex.flex-col.flex-col-reverse(v-show="timeline.logo" ref="logo")
      img.logo-img(src="@/assets/images/page3/logo.png")
    #time-2.my-10(ref="title2" v-show="timeline.title2")
      img.t-2(src="@/assets/images/page2/title2.png")
    #download.flex-1.flex.flex-col(ref="download" v-show="timeline.download")
      .actions.flex.text-white
        a.btn.pc.bg-no-repeat.flex.items-center.justify-center.text-xl(rel="nofollow" v-if="download.pc" :href="download.pc" title="雷神加速器抢先版下载" download target="_blank")
          img.icon.mr-5(src="@/assets/images/page3/icon-1.png")
          | 全新PC8.0下载
        button.btn.mobile.flex.items-center.justify-center.text-xl.relative(class="-ml-2" @mouseenter="showPopover(true)" @mouseleave="showPopover(false)")
          img.icon.mr-5(src="@/assets/images/page3/icon-2.png")
          | 移动版
          transition(
            enter-class="scale-0"
            enter-active-class="transition transform duration-300 origin-top"
            enter-to-class="scale-1"
            leave-class=" scale-1"
            leave-active-class="transition transform duration-300 origin-top"
            leave-to-class="scale-0"
          )
            .popover.absolute.rounded-xl.p-5.bg-white.top-full.mt-5.flex.space-x-5.z-10.mt-5.cursor-default(v-show="download.popover" v-if="download.mobile")
              .popover-qrcode.h-40.w-40
                img(src="@/assets/images/download-nn.png" width="200" height="200")
              .popover-actions.inline-flex.flex-col.items-center.justify-evenly
                a.w-40.rounded.inline-flex.items-center.justify-evenly(:href="download.mobile.find(t => t.sub_title === 'ios').url" target="_blank")
                  img(src="@/assets/images/apple@2x.png" width="15" height="18")
                  | AppStore
                  img(src="@/assets/images/download@2x.png" width="10" height="11")
                a.w-40.rounded.inline-flex.items-center.justify-evenly(:href="download.mobile.find(t => t.sub_title === 'Android').url" target="_blank")
                  img(src="@/assets/images/android@2x.png" width="15" height="18")
                  | Android
                  img(src="@/assets/images/download@2x.png" width="10" height="11")
      .flex-1.flex.items-center.justify-center.z-0
        nuxt-link.prod.text-xl.inline-flex.items-center.justify-center(to="/detailPage")
          | 产品介绍
          span.mx-4.text-gray-500 —
          img.ml-2.animate-swing(src="@/assets/images/page3/arrow-right.png")

</template>

<script>
import anime from 'animejs';
import { mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  data() {
    return {
      timeline: {
        circle: false,
        circle1: false,
        circle2: false,
        title1: false,
        title2: false,
        bubble: false,
        logo: false,
        nav: false,
        bg: false,
        download: false,
        target: '',
      },
      logAgent: {
        status: false,
        timer: 0
      },
      download: {
        pc: '',
        mobile: '',
        popover: false,
        timer: 0
      }
    }
  },
  mounted() {
    this.runAnime();
    this.getDownloadAct();
  },
  methods: {
    ...mapActions(['getDownload']),
    resetAnime() {
      this.timeline.circle = false;
      this.timeline.circle1 = false;
      this.timeline.circle2 = false;
      this.timeline.title1 = false;
      this.timeline.title2 = false;
      this.timeline.bubble = false;
      this.timeline.logo = false;
      this.timeline.nav = false;
      this.timeline.bg = false;
      this.timeline.download = false;
      this.runAnime();
    },
    async runAnime() {

      const t1 = anime({
        targets: [this.$refs.circle, this.$refs.circle1, this.$refs.circle2],
        opacity: [1, 0],
        scale: [1, 0.7],
        duration: 300,
        autoplay: false,
        complete: () => {
          this.timeline.circle = false;
          this.timeline.circle1 = false;
          this.timeline.circle2 = false;
        },
      })

      const t2 = anime({
        targets: this.$refs.bubble,
        scale: [1, Math.max(Math.ceil(window.innerWidth / 120), Math.ceil(window.innerHeight / 120)) * 1.4],
        easing: anime.penner.easeOutQuart,
        autoplay: false,
        begin: () => {
          this.timeline.bubble = true;
        },
        complete: () => {
          this.timeline.bubble = false;
        }
      })

      const t3 = anime({
        targets: this.$refs.title2,
        scale: [1, 0.725],
        autoplay: false,
      })

      const t4 = anime({
        targets: this.$refs.logo,
        opacity: [0, 1],
        translateY: [100, 0],
        autoplay: false,
        begin: () => {
          this.timeline.logo = true;
        }
      })

      const t5 = anime({
        targets: this.$refs.nav.children,
        translateY: [-100, 0],
        delay: anime.stagger(100),
        autoplay: false,
        begin: () => {
          this.timeline.nav = true;
        }
      })
      const t6 = anime({
        targets: this.$refs.download,
        opacity: [0, 1],
        translateY: [-100, 0],
        autoplay: false,
        begin: () => {
          this.timeline.download = true
        }
      })
      const t7 = anime({
        targets: this.$refs.bg,
        opacity: [0, 1],
        autoplay: false,
        begin: () => {
          this.timeline.bg = true;
        }
      })

      this.timeline.target = anime.timeline({
        duration: 600,
        easing: anime.penner.easeInOutCubic
      })
      this.timeline.target.add({
        targets: [this.$refs.circle, this.$refs.circle1, this.$refs.circle2],
        opacity: [0, 1],
        scale: [0.7, 1],
        begin: () => {
          this.timeline.circle = true;
          this.timeline.circle1 = true;
          this.timeline.circle2 = true;
        },
      }).add({
        targets: this.$refs.title1,
        translateX: [-500, 0],
        delay: 600,
        endDelay: 200,
        opacity: [0, 1],
        begin: () => {
          this.timeline.title1 = true;
        },
      }, '-=500')
        .add({
          targets: this.$refs.title1,
          translateX: [0, 500],
          opacity: [1, 0],
          delay: 600,
          complete: () => {
            this.timeline.title1 = false;
            this.timeline.bubble = true;
          },
        })
        .add({
          targets: this.$refs.title2,
          translateX: [-500, 0],
          opacity: [0, 1],
          begin: () => {
            this.timeline.title2 = true;
          },
        }, '-=300')

      await this.timeline.target.finished

      t1.play()
      t2.play()
      t3.play()
      t4.play()
      t5.play()
      t6.play()
      t7.play()

      console.log(this.timeline.target, this.$refs.nav);
    },
    showTools(status = true) {
      if (!status) {
        return this.logAgent.timer = setTimeout(() => {
          this.logAgent.status = false;
          this.logAgent.timer = 0;
        }, 600)
      }
      if (this.logAgent.timer) clearTimeout(this.logAgent.timer);
      this.logAgent.status = true;
    },
    async getDownloadAct() {
      this.download.mobile = await this.getDownload({
        group: 'nn-download'
      });
      const { leigod } = await this.$axios.$get('/config.json', {
        baseURL: process.env.BASE_URL
      })
      this.download.pc = leigod.windows.download_url
    },
    showPopover(status = true) {
      // console.log(status);
      if (!status) {
        return this.download.timer = setTimeout(() => {
          this.download.popover = false;
          this.download.timer = 0;
        }, 600);
      }
      if (this.download.timer) clearTimeout(this.download.timer);
      this.download.popover = true;
    }
  }
}
</script>
<style lang="scss" scoped>
main {
  --top-param: 0px;
  background: linear-gradient(180deg, #101010 0%, #2E2E2E 100%);

  header {
    .user-agent {
      .login {
        &::after {
          content: '';
          position: absolute;
          top: calc(50% - 7px);
          right: 0px;
          opacity: 0.6;
          background: white;
          width: 1px;
          height: 14px;
        }
      }

      #tools {
        background: #222;
      }
    }
  }

  section {
    min-height: 900px;
  }
}

@keyframes swing {

  0%,
  50%,
  100% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(5px);
  }

  75% {
    transform: translateX(-5px);
  }
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: .5;
  }
}

@keyframes bouncing {

  0%,
  100% {
    transform: scale(0.75);
    transform-origin: top center;
  }

  50% {
    transform: scale(1);
    transform-origin: top center;
  }
}


.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-swing {
  animation: swing 1.6s linear infinite;
}

.animate-bouncing {
  animation: bouncing 1.6s linear infinite;
}

.circle-1 {
  left: 0;
  top: 0;
}

.circle-2 {
  right: 0;
  bottom: 0;
}


#circle {
  top: var(--top-param);
}

#time-1 {
  left: calc(50% - 440px);
  top: calc(50% - 136px + var(--top-param));
}

#logo {
  min-height: 400px;
}

#time-2 {
  // left: calc(50% - 598px);
  // top: max(calc(50% - 88px + var(--top-param)), 400px);
}

#bg {
  .light {
    left: calc(50% - 563px);
  }
}

#bubble {
  box-shadow: 0 0 1.25vw 1.25vw rgba(white, 0.7) inset;
  left: calc(50% - 80px);
  top: calc(50% - 80px + var(--top-param));
}

#download {
  min-height: 400px;

  .actions {
    z-index: 1;

    .btn {
      &.pc {
        background-image: url('@/assets/images/page3/btn-pc.png');
        width: 325px;
        height: 83px;
        transition: all .2s ease-in-out;
        filter: drop-shadow(0px 0px 0px #27CB8E);

        &:hover {
          filter: drop-shadow(0px 4px 6px #27CB8E);
        }
      }

      &.mobile {
        background-image: url('@/assets/images/page3/btn-mobile.png');
        width: 325px;
        height: 83px;
        transition: all .2s ease-in-out;
        filter: drop-shadow(0px 0px 0px #646464);

        &:hover {
          filter: drop-shadow(0px 4px 6px #646464);
        }
      }
    }
  }

  .prod {
    width: 220px;
    height: 50px;
    color: #CEFFD0;
    border-radius: 20px;
    border: 2px solid #CEFFD0;
    overflow: hidden;
    background: linear-gradient(180deg, #101010 0%, #2E2E2E 100%);


    &:hover {
      .animate-swing {
        transform: translateX(5px);
        animation: none;
      }
    }
  }

  .popover {
    filter: drop-shadow(0 2px 4px rgba(white, 0.6));

    &:hover {
      filter: drop-shadow(0 4px 6px rgba(white, 0.6));

    }

    &::after {
      content: '';
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid white;
      position: absolute;
      top: -20px;
      left: calc(50% - 10px);
    }

    &-actions {
      a {
        color: #363636;
        background: #F4F4F4;
        border: 1px solid #c2c2c2;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
      }
    }
  }
}
</style>
