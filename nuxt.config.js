export default {
  target: 'static',
  components: true,

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ca'
    },
    title: 'Sonora - Circuit de Música Valenciana',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'L’Institut Valencià de Cultura presenta la segona edició de Sonora, el circuit de concerts que porta als grups guanyadors i finalistes dels Premis Carles Santos de la Música Valenciana per tot el nostre territori.' },
      { name: 'theme-color', content: '#D0D2D6' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x160', href: '/favicons/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicons/site.webmanifest' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#F55309' },

  /*
  ** Global CSS
  */
  css: [
    './sass/global.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/api.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
    '@nuxtjs/style-resources',
    '@nuxtjs/svg'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/markdownit'
  ],

  /*
  ** Content
  */
  content: {
    nestedProperties: ['concerts.artists']
  },

  /*
  ** Style resources
  */
  styleResources: {
    scss: './sass/_variables.scss'
  },

  /*
  ** Markdown
  */
  markdownit: {
    runtime: true
  },

  /*
  ** Redirects
  */
  router: {
    extendRoutes (routes, resolve) {
      routes.push({ path: '/schedule', redirect: { name: 'programa' } })
      routes.push({ path: '/about', redirect: { name: 'el-circuit' } })
      routes.push({ path: '/artists', redirect: { name: 'artistes' } })
      routes.push({ path: '/contact', redirect: { name: 'contacte' } })
    }
  }
}
