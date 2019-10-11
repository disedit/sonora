import ogThumbnail from './assets/images/thumbnail.jpg'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { property: 'og:image', content: ogThumbnail }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
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
    //
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['bootstrap-vue/nuxt'],
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faFacebookSquare', 'faTwitterSquare', 'faSpotify', 'faInstagram', 'faYoutube']
        },
        {
          set: '@fortawesome/pro-regular-svg-icons',
          icons: ['faArrowLeft', 'faArrowRight', 'faPlay', 'faGlobe']
        }
      ]
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  **
  */
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    componentPlugins: [
      'NavbarPlugin',
      'FormPlugin',
      'FormInputPlugin',
      'FormGroupPlugin',
      'ButtonPlugin',
      'FormTextareaPlugin',
      'ModalPlugin'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true
  }
}
