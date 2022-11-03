export default {
  // router: {
  //   base: '/vineta/',
  // },
  server: {
<<<<<<< HEAD
  host: '127.0.0.1', // default: localhost
  port: '3000',
=======
    host: '127.0.0.1', // default: localhost
    port: '3000',
>>>>>>> 0b99a1df6726a552c775289950725fcc6512a58e
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vineta',
    htmlAttrs: {
      lang: 'en',
    },
<<<<<<< HEAD
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
=======
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '' }, { name: 'format-detection', content: 'telephone=no' }],
>>>>>>> 0b99a1df6726a552c775289950725fcc6512a58e
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/tabs.js',
    '~/plugins/vars.js',
    '~/plugins/i18n.js',
    '~/plugins/axios.js',
    '~/plugins/vue-3d-loader.js',
    // '~/plugins/vue-meta.js',
    { src: '~/plugins/print.js', ssr: false },
<<<<<<< HEAD
    { src: '~/plugins/lightgallery.js', ssr: false }
=======
    { src: '~/plugins/lightgallery.js', ssr: false },
>>>>>>> 0b99a1df6726a552c775289950725fcc6512a58e
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    'nuxt-gsap-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@openafg/nuxt-fullpage',
    'nuxt-vuex-localstorage',
    '@nuxtjs/i18n',
    // 'nuxt-lazy-load'
  ],

  i18n: {
    locales: [
      {
        code: 'ru',
        name: 'RU',
<<<<<<< HEAD
        file: 'ru.json'
=======
        file: 'ru.json',
>>>>>>> 0b99a1df6726a552c775289950725fcc6512a58e
      },
      // {
      //   code: 'en',
      //   name: 'EN',
      //   file: 'en.json'
      // },
    ],
    defaultLocale: 'ru',
    fallbackLocale: 'ru',
    strategy: 'prefix',
    detectBrowserLanguage: false,
    // lazy: true,
<<<<<<< HEAD
    langDir: 'locales'
=======
    langDir: 'locales',
>>>>>>> 0b99a1df6726a552c775289950725fcc6512a58e
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
<<<<<<< HEAD
    baseURL: 'https://vineta.fvds.ru/local/api/',
=======
    baseURL: 'https://vineta.ru/local/api/',
>>>>>>> 0b99a1df6726a552c775289950725fcc6512a58e
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
<<<<<<< HEAD
    extend (config, ctx) {
      config.resolve.symlinks = false
    },
    extractCSS: true,
    transpile: [
      'three'
    ],
=======
    extend(config, ctx) {
      config.resolve.symlinks = false
    },
    extractCSS: true,
    transpile: ['three'],
>>>>>>> 0b99a1df6726a552c775289950725fcc6512a58e
  },
  components: true,
  styleResources: {
    scss: ['./assets/scss/helpers/*.scss'],
  },
}
