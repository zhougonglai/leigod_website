<template lang="pug">
main.flex.flex-col.items-center.h-screen.overflow-hidden
  header.container.flex.h-20.absolute.z-10
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
      button.nav-link.w-32.text-center.px-5.text-white.opacity-60(class="hover:opacity-100" v-if="timeline.target" @click="resetAnime") 重播
      nuxt-link.nav-link.w-32.text-white.opacity-60.inline-flex.items-center.justify-center(class="hover:opacity-100" active-class="opacity-100" to="/") 首页
      button.nav-link.w-32.text-center.px-5.text-white.opacity-60(class="hover:opacity-100") 加速盒
      button.nav-link.w-32.text-center.px-5.text-white.opacity-60(class="hover:opacity-100") 活动
      button.nav-link.w-32.text-center.px-5.text-white.opacity-60(class="hover:opacity-100") 帮助中心
      button.nav-link.w-32.text-center.px-5.text-white.opacity-60(class="hover:opacity-100") 网吧商家版
  section.absolute.inset-0.flex.items-center.justify-center.flex-col.h-screen.w-screen
    img.absolute.circle-1.animate-pulse(v-show="timeline.circle1" ref="circle1" src="@/assets/images/page1/circle-1.png" )
    img.absolute.circle-2.animate-pulse(v-show="timeline.circle2" ref="circle2" src="@/assets/images/page1/circle-2.png" style="animation-delay: .5s;")
    #circle.absolute.inset-y-0.z-10(v-show="timeline.circle" ref="circle")
      img.object-center.object-contain(src="@/assets/images/page1/apng/circle.png")
    #time-1.absolute(ref="title1" v-show="timeline.title1")
      img.t-1(src="@/assets/images/page1/logo-title.png")
    #bubble.rounded-full.absolute.w-40.h-40.z-10(v-show="timeline.bubble" ref='bubble')
    #bg.absolute.inset-x-0.bottom-0(v-show="timeline.bg" ref="bg")
      img.bg(src="@/assets/images/page3/Apng/3–1_00000_iSpt.png")
      img.light.absolute.top-0.transform(src="@/assets/images/page3/light.png" class="left-1/2 -translate-x-1/2")
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
            enter-class="transform scale-0"
            enter-active-class="transition"
            enter-to-class="transform scale-1"
            leave-class="transform scale-1"
            leave-active-class="transition"
            leave-to-class="transform scale-0"
          )
            .popover.absolute(v-show="download.popover" v-if="download.mobile")
              .popover-qrcode
              .popover-actions
                a(:href="download.mobile.find(t => t.sub_title === 'ios')" target="_blank") Apple Store
      .flex-1.flex.items-center.justify-center
        nuxt-link.prod.text-xl.inline-flex.items-center.justify-center(to="/download")
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

      anime({
        targets: [this.$refs.circle, this.$refs.circle1, this.$refs.circle2],
        opacity: [1, 0],
        scale: [1, 0.7],
        duration: 300,
        complete: () => {
          this.timeline.circle = false;
          this.timeline.circle1 = false;
          this.timeline.circle2 = false;
        },
      })

      anime({
        targets: this.$refs.bubble,
        scale: [1, Math.max(Math.ceil(window.innerWidth / 120), Math.ceil(window.innerHeight / 120)) * 1.4],
        duration: 1000,
        easing: anime.penner.easeOutQuart,
        begin: () => {
          this.timeline.bubble = true;
        },
        complete: () => {
          this.timeline.bubble = false;
        }
      })
      anime({
        targets: this.$refs.title2,
        scale: [1, 0.725]
      })
      anime({
        targets: this.$refs.logo,
        opacity: [0, 1],
        translateY: [100, 0],
        begin: () => {
          this.timeline.logo = true;
        }
      })
      anime({
        targets: this.$refs.nav.children,
        translateY: [-100, 0],
        delay: anime.stagger(100),
        begin: () => {
          this.timeline.nav = true;
        }
      })
      anime({
        targets: this.$refs.download,
        opacity: [0, 1],
        translateY: [-100, 0],
        begin: () => {
          this.timeline.download = true
        }
      })
      anime({
        targets: this.$refs.bg,
        opacity: [0, 1],
        begin: () => {
          this.timeline.bg = true;
        }
      })

      console.log(this.timeline.target, this.$refs.nav);
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
      if (!status) {
        if (this.download.timer) clearTimeout(this.download.timer);
        this.download.timer = setTimeout(() => {
          this.download.popover = false;
          this.download.timer = 0;
        }, 1000);
      }
      this.download.popover = true;
    }
  }
}
</script>
<style lang="scss" scoped>
main {
  --top-param: 0px;
  background: linear-gradient(180deg, #101010 0%, #2E2E2E 100%);

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

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-swing {
  animation: swing 1.6s linear infinite;
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

#bubble {
  box-shadow: 0 0 1.25vw 1.25vw rgba(white, 0.7) inset;
  left: calc(50% - 80px);
  top: calc(50% - 80px + var(--top-param));
}

#download {
  min-height: 400px;

  .actions {

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
    height: 60px;
    color: #CEFFD0;
    border-radius: 20px;
    border: 2px solid #CEFFD0;
    overflow: hidden;
  }
}
</style>
