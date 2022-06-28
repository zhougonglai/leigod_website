<template lang="pug">
nuxt
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      dark: true
    }
  },
  created() {
    this.$root.FILE_URL = process.env.FILE_URL
    this.$root.IMG_URL = process.env.IMG_URL
  },
  mounted() {
    document.documentElement.classList.add('dark');
  },
  methods: {
    themeType(type) {
      if (type === 'system') {
        document.documentElement.classList.remove('dark');
      } else if (type === 'dark') {
        document.documentElement.classList.add('dark');
      } else if (type === 'light') {
        document.documentElement.classList.remove('dark');
      }
    }
  }
}
</script>
