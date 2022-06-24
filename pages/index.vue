<template lang="pug">
main.flex.flex-col.items-center.min-h-screen(class="dark:bg-gray-900 bg-white")
  header.container
    nav.inline-flex
      nuxt-link.py-5(to="/")
        img(src="~/assets/images/logo.png" alt="logo" width="164" height="42")
  section
  dialog.relative.flex.items-center.justify-center(ref="anime" :inert="inert")
    .circle.perspective.absolute
      img.z(src="@/assets/images/ttround.png")
    .time-1.perspective.absolute
      img.t-1.scale-150.transform(src="@/assets/images/logo.png")
</template>

<script>
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
      this.inert = true;
      this.$refs.anime.showModal();
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes z {
  from {
    transform: translateX(0) translateY(0) translateZ(0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1);
  }

  to {
    transform: translateX(0) translateY(0) translateZ(0) rotateX(0deg) rotateY(0deg) rotateZ(360deg) scaleX(1) scaleY(1) scaleZ(1);
  }
}

main {
  transform-style: preserve-3d;
  perspective: 1000px;
}

dialog {
  &:not([open]) {
    pointer-events: none;
    opacity: 0;
  }

  background: transparent;
  transform: translateZ(-1000px);
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

  &::backdrop {
    transition: backdrop-filter .5s ease;
    backdrop-filter: blur(15px);
    z-index: 9;
  }

  .perspective {
    transform-style: preserve-3d;
    transition-property: all;
    backface-visibility: visible;

    img {
      transform-style: preserve-3d;
      transition-property: all;
      backface-visibility: visible;
    }
  }

  .circle {
    width: 679px;
    height: 679px;
    left: 50%;
    transform: translateX(-50%) translateZ(-20px) rotateY(62deg);
  }

  .time-1 {
    left: 50%;
    transform: translateX(-50%) translateZ(-20px);
  }

  .z {
    animation: z 5s linear 0s infinite;
    transform-style: preserve-3d;
  }
}
</style>
