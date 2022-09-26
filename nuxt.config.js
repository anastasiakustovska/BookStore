export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'READ FOX',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{charset: 'utf-8'}, {name: 'viewport', content: 'width=device-width, initial-scale=1'}, {
      hid: 'description',
      name: 'description',
      content: ''
    }, {name: 'format-detection', content: 'telephone=no'}],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.scss', '@fortawesome/fontawesome-svg-core/styles.css',],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/fontawesome.js',],

  loading: true,
  layoutTransition: 'fade',
  pageTransition: 'fade',

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Montserrat: true, 'Josefin+Sans': true, Lato: [100, 300], Raleway: {
        wght: [100, 400], ital: [100]
      },
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [// https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt', // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',],

  router: {
    linkActiveClass: 'my-custom-active-link'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://api.itbook.store/1.0/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
