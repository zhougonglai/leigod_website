<template lang="pug">
main.flex.flex-col.items-center.min-h-screen
  header.container
    nav.inline-flex
      nuxt-link.py-5(to="/")
        img(src="~/assets/images/logo.png" alt="logo" width="164" height="42")
  section
  transition(
    appear
    enter-class="backdrop-blur-none"
    enter-active-class="transform"
    enter-to-class="backdrop-blur"
    leave-class="backdrop-blur"
    leave-active-class="transform"
    leave-to-class="backdrop-blur-none"
  )
    #backdrop.absolute.inset-0.w-full.h-full.backdrop-filter.backdrop-blur.z-10(v-show="timeline.backdrop" ref="backdrop")
  transition
    #circle.absolute.z-10(v-show="timeline.circle" ref="circle")
      img(src="@/assets/images/circle.gif")
  transition
    #time-1.absolute(ref="title1" v-show="timeline.title1")
      img.t-1.scale-150.transform(src="@/assets/images/logo.png")
  transition
    #time-2.absolute(ref="title2" v-show="timeline.title2")
      img.t-2(src="@/assets/images/better_title.png")
  transition
    .bubble.rounded-full.absolute.origin-center.w-60.h-60(v-show="timeline.bubble" ref='bubble')
</template>

<script>
import anime from 'animejs';

export default {
  name: 'IndexPage',
  data() {
    return {
      timeline: {
        backdrop: false,
        circle: false,
        title1: false,
        title2: false,
        bubble: false,
      },
    }
  },
  mounted() {
    this.runAnime();
  },
  methods: {
    async runAnime() {
      this.timeline.backdrop = true;
      const t1 = anime.timeline({
        duration: 600,
        delay: 600,
        endDelay: 600,
        easing: anime.penner.easeInOutCubic
      })
      t1.add({
        targets: this.$refs.backdrop,
        opacity: [0, 1],
        begin: () => {
          this.timeline.backdrop = true;
        },
      }).add({
        targets: this.$refs.circle,
        opacity: [0, 1]
      }).add({
        targets: this.$refs.title1,
        translateX: [-250, 0],
        opacity: [0, 1],
      }).add({
        targets: this.$refs.title1,
        translateX: 0,
      }).add({
        targets: this.$refs.title1,
        translateX: [0, 250],
        opacity: [1, 0],
      }).add({
        targets: this.$refs.title2,
        translateX: [-250, 0],
        opacity: [0, 1],
      }, '-=400')

      t1.finished.then(() => {
        this.$refs.anime.close();
        this.bubble = true;
        anime({
          targets: this.$refs.bubble,
          scale: [1, Math.max(Math.ceil(window.innerWidth / 120), Math.ceil(window.innerHeight / 120)) * 1.5],
          easing: anime.penner.easeOutCubic,
          begin: () => {
            this.timeline.bubble = true;
          },
          complete: () => {
            this.timeline.bubble = false;
          }
        })
      })
      console.log(t1);
    }
  }
}
</script>
<style lang="scss" scoped>
main {
  background: linear-gradient(180deg, #101010 0%, #2E2E2E 100%);
}

#backdrop {
  background: transparent;

  &::backdrop {
    transition: backdrop-filter .6s ease-in-out;
    backdrop-filter: blur(15px);
    z-index: 9;
  }
}

.bubble {
  box-shadow: 0 0 1.25vw 1.25vw rgba(white, 0.7) inset;
  left: calc(50% - 120px);
  top: calc(50% - 120px);
}
</style>
