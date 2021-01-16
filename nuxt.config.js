export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",
  server: {
    port: 3000,
    host: "0.0.0.0",
    inline: false,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "PersonalSite",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700;800;900&display=swap",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/styles/main.scss"],
  styleResources: {
    scss: [
      "~assets/styles/mixins/_mediaQueries.scss",
      "~assets/styles/mixins/_fontSize.scss",
      "~assets/styles/mixins/_lineHeight.scss",
      "~assets/styles/mixins/_paddingMixin.scss",
      "~assets/styles/mixins/_heightMixin.scss",
      "~assets/styles/mixins/_dynamicMixin.scss",
      "~assets/styles/vars/_colors.scss",
      "~assets/styles/vars/_padding.scss",
      "~assets/styles/vars/_font.scss",
      "~assets/styles/vars/_fontLineHeight.scss",
      "~assets/styles/vars/_height.scss",
    ],
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources",
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
