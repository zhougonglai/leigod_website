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
