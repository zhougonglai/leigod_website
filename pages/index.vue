<template lang="pug">
main.flex.flex-col.items-center.min-h-screen.overflow-hidden
  header.container.flex
    nav.inline-flex
      nuxt-link.py-5(to="/")
        img(src="~/assets/images/page1/logo.png" alt="logo" width="148" height="41")
    .flex-1
    nav.inline-flex
      button.text-white(v-if="timeline.target" @click="timeline.target.restart") 首页
  section
  img.absolute.circle-1.animate-pulse(v-show="timeline.circle1" ref="circle1" src="@/assets/images/page1/circle-1.png" )
  img.absolute.circle-2.animate-pulse(v-show="timeline.circle2" ref="circle2" src="@/assets/images/page1/circle-2.png" style="animation-delay: .5s;")
  #circle.absolute.inset-y-0.z-10(v-show="timeline.circle" ref="circle")
    img.object-center.object-contain(src="@/assets/images/page1/apng/circle.png")
  #time-1.absolute.block(ref="title1" v-show="timeline.title1")
    img.t-1(src="@/assets/images/page1/logo-title.png")
  #time-2.absolute(ref="title2" v-show="timeline.title2")
    img.t-2(src="@/assets/images/page2/title2.png")
  #bubble.rounded-full.absolute.w-40.h-40.z-10(v-show="timeline.bubble" ref='bubble')
</template>

<script>
import anime from 'animejs';

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
        target: '',
      },
    }
  },
  mounted() {
    this.runAnime();
  },
  methods: {
    async runAnime() {
      this.timeline.target = anime.timeline({
        duration: 600,
        easing: anime.penner.easeInOutCubic
      })
      this.timeline.target.add({
        targets: [this.$refs.circle],
        opacity: [0, 1],
        endDelay: 0,
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
        }, '-=400')
        .add({
          targets: this.$refs.bubble,
          // scale: [1, 1.4],
          scale: [1, Math.max(Math.ceil(window.innerWidth / 120), Math.ceil(window.innerHeight / 120)) * 1.4],
          duration: 800,
          easing: anime.penner.easeOutQuart,
          begin: () => {
            this.timeline.bubble = true;
          },
          complete: () => {
            this.timeline.bubble = false;
          }
        })
        .add({
          targets: this.$refs.title2,
          scale: [1, 0.725]
        }, '-=500')
        .add({
          targets: [this.$refs.circle, this.$refs.circle1, this.$refs.circle2],
          opacity: [1, 0],
          scale: [1, 0.5],
          complete: () => {
            this.timeline.circle = false;
            this.timeline.circle1 = false;
            this.timeline.circle2 = false;
          },
        }, '-=500')

      console.log(this.timeline.target);
    }
  }
}
</script>
<style lang="scss" scoped>
main {
  --top-param: 30px;
  background: linear-gradient(180deg, #101010 0%, #2E2E2E 100%);
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

#time-2 {
  left: calc(50% - 598px);
  top: calc(50% - 88px + var(--top-param));
}

#bubble {
  box-shadow: 0 0 1.25vw 1.25vw rgba(white, 0.7) inset;
  left: calc(50% - 80px);
  top: calc(50% - 80px + var(--top-param));
}
</style>
