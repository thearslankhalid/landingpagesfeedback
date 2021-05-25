/* eslint-disable no-dupe-keys */
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Landing Page Feedback',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Are you a SaaS founder or an Indie Hacker looking to improve your landing page? Get personalized feedback for your product landing page and covert more visitors into customers.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/',
        crossorigin: true,
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;700&family=Mulish:wght@300;500;700&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/main.scss', '~/assets/scss/vendors/css/fontawesome.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/vuelidate.js' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxt/content'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Extend router
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'sass-case-studies',
        path: '/sass-case-studies',
        component: resolve(__dirname, 'pages/Teardowns.vue'),
      })
    },
  },
}
