import LineClamp from "@tailwindcss/line-clamp";
import Forms from "@tailwindcss/forms";

export default {
  // target: "static",
  target: "server",
  // ssr: false,
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
  env: {
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL,
    IMG_URL: process.env.IMG_URL,
    FILE_URL: process.env.FILE_URL,
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa", "@nuxt/content"],
  axios: {
    baseURL: process.env.API_URL,
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.API_URL,
    },
  },
  pwa: {
    manifest: {
      lang: "zh-cn",
    },
  },
  tailwindcss: {
    config: {
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
  server: {
    port: 3000, // default: 3000
    host: "127.0.0.1", // default: localhost,
    // host: "localhost", // default: localhost,
  },
};
