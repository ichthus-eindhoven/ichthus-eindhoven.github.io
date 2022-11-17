export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "C.S.V. Ichthus Eindhoven",
    htmlAttrs: {
      lang: "nl",
    },
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: "De website van C.S.V. Ichthus Eindhoven"},
      {name: "format-detection", content: "telephone=no"},
    ],
    link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Main UIkit file
    "@/assets/sass/app.scss",
  ],

  // scripts
  script: [
    {
      src: "@/assets/js/app.js",
      type: "text/javascript",
      body: true,
      defer: true,
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{src: "~/plugins/uikit", mode: "client"}],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: ["@nuxtjs/axios",
  //   "cookie-universal-nuxt"
  // ],
  // Build Configuration: https"@nuxtjs/axios"v/config-build
  build: {},
  generate: {fallback: "404.html"},
  // axios: {
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "multipart/form-data",

  //   },
  // },
  render: {
    // Setting up cache for 'static' directory - a month in milliseconds
    // https://web.dev/uses-long-cache-ttl
    static: {
      maxAge: 60 * 60 * 24 * 31,
    },
  },
};
