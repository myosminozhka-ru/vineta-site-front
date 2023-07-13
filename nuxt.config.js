export default {
  // router: {
  //   base: '/vineta/',
  // },
  server: {
    host: '127.0.0.1', // default: localhost
    port: '3020',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vineta',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '' }, { name: 'format-detection', content: 'telephone=no' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [ { src: 'https://www.google.com/recaptcha/api.js?render=6LdyyBIiAAAAAJxX77HEBLLkdwh06qwsdXOrL9wm', async: true, defer: true}]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/tabs.js',
    '~/plugins/vars.js',
    '~/plugins/i18n.js',
    '~/plugins/axios.js',
    // '~/plugins/vue-3d-loader.js',
    // '~/plugins/vue-meta.js',
    { src: '~/plugins/print.js', ssr: false },
    { src: '~/plugins/phone-mask.js', ssr: false },
    { src: '~/plugins/lightgallery.js', ssr: false },
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
    '@nuxt/image',
    // 'nuxt-lazy-load',
  ],

  i18n: {
    locales: [
      {
        code: 'ru',
        name: 'RU',
        file: 'ru.json',
      },
      {
        code: 'en',
        name: 'EN',
        file: 'en.json',
      },
    ],
    defaultLocale: 'ru',
    fallbackLocale: false,
    strategy: 'prefix',
    detectBrowserLanguage: false,
    // lazy: true,
    langDir: 'locales',
  },
  publicRuntimeConfig: {
    vareibles: {
      remote: process.env.URL,
    },
    recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.URL + '/local/api/',
  },

  image: {
    dir: 'assets/img',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.resolve.symlinks = false
    },
    filenames: {
      chunk: () => '[name].[id].[contenthash].js',
    },
    extractCSS: true,
    transpile: ['three', '@glidejs/glide'],
  },
  components: true,
  styleResources: {
    scss: ['./assets/scss/helpers/*.scss'],
  },
}
