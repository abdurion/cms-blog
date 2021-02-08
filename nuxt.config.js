export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "مدوّنه| عبدالرحمن القميدي",
    htmlAttrs: {
      lang: "ar"
    },
    meta: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;700;900&display=swap"
      },
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "مدونه شخصية لكل ما يهمني من تقنية، برمجة، تصميم و تصوير"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/helpers" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/fontawesome"],

  // FontAwesome
  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content"],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
