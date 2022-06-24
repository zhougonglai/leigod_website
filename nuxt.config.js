import LineClamp from "@tailwindcss/line-clamp";
import Forms from "@tailwindcss/forms";

export default {
  // target: "static",
  ssr: false,
  head: {
    title: "雷神加速器",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    script: [
      {
        src: "https://b.alicdn.com/s/polyfill.min.js?features=default,es2015,Intl",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa", "@nuxt/content"],
  axios: {
    baseURL: "/",
  },
  pwa: {
    manifest: {
      lang: "zh-cn",
    },
  },
  tailwindcss: {
    config: {
      darkMode: "class",
      plugins: [Forms, LineClamp],
    },
  },
  content: {},
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
