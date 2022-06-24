<template lang="pug">
main.flex.flex-col.items-center.min-h-screen(class="dark:bg-gray-900 bg-white")
  header.container
    nav.inline-flex
      nuxt-link.py-5(to="/")
        img(src="~/assets/images/logo.png" alt="logo" width="164" height="42")
  section
  dialog.relative.flex.items-center.justify-center.overflow-hidden(ref="anime")
    #circle.absolute.z-10.transform(ref="circle" style="opacity: 0;")
      img(src="@/assets/images/circle.gif")
    #time-1.absolute.transform(ref="title1" style="opacity: 0;")
      img.t-1.scale-150.transform(src="@/assets/images/logo.png")
</template>

<script>
import anime from 'animejs';

export default {
  name: 'IndexPage',
  data() {
    return {
      inert: false,
    }
  },
  mounted() {
    this.runAnime();
  },
  methods: {
    async runAnime() {
      this.$refs.anime.showModal();
      const circle = anime({
        targets: this.$refs.circle,
        duration: 650,
        opacity: [0, 1]
      })
      const t1 = anime.timeline({
        targets: this.$refs.title1,
        duration: 650,
        delay: 500,
        endDelay: 400,
        easing: anime.penner.easeInOutCubic
      })
      t1.add({
        translateX: [-250, 0],
        opacity: [0, 1],
      }).add({
        translateX: 0,
        delay: 600
      }).add({
        translateX: -250,
        opacity: [1, 0]
      })
      console.log(t1);
    }
  }
}
</script>
<style lang="scss" scoped>
dialog {
  &:not([open]) {
    pointer-events: none;
    opacity: 0;
  }

  background: transparent;
  transform-style: preserve-3d;
  transition-property: all;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  transition: opacity 2s 2s ease-in-out;

  &::backdrop {
    transition: backdrop-filter .5s ease;
    backdrop-filter: blur(15px);
    z-index: 9;
  }
}
</style>
