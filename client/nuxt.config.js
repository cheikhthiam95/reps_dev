export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script : [
     { src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDbDx2dVOi_VRx7H5jCpUv4LeMZZn9siqo&libraries=places"},
     { src: "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=AIzaSyDbDx2dVOi_VRx7H5jCpUv4LeMZZn9siqo"}

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/bootstrap.scss'
  ],

  js:[
    '@/assets/js/bootstrap.min.js'
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bootstrap.js',
    '~/plugins/axios.js'


  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    "vue-toastification/nuxt",
    ['vue-warehouse/nuxt',
      // {
      //   vuex: true,
      //   plugins: [
      //     'store/plugins/expire',
      //     'store/plugins/defaults'
      //   ], 
      //   storages: [
      //     'store/storages/localStorage',
      //     'store/storages/cookieStorage'
      //   ]
      // }
    ]

  ],

 
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  
  // use these settings to use custom css
  bootstrapVue: {
    bootstrapCSS: false,
    icons: true,
  },
  axios: {
    baseURL: 'http://localhost:5001/api', // Used as fallback if no runtime config is provided
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
