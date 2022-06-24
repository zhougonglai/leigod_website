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
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.$root.theme = 'dark'
    } else {
      this.$root.theme = 'light'
    }
  },
  mounted() {
    document.documentElement.classList.add('dark');
    // if (this.$root.theme === 'dark') {
    //   document.documentElement.classList.add('dark');
    // } else {
    //   document.documentElement.classList.remove('dark');
    // }
  },
  methods: {
    themeType(type) {
      if (type === 'system') {
        localStorage.removeItem('theme')
        document.documentElement.classList.remove('dark');
      } else if (type === 'dark') {
        this.$root.theme = localStorage.theme = 'dark'
        document.documentElement.classList.add('dark');
      } else if (type === 'light') {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark');
      }
    }
  }
}
</script>
