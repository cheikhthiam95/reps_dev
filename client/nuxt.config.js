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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
      { rel: 'stylesheet',  href: 'https://unpkg.com/swiper/swiper-bundle.min.css' }
    ],
    script : [
     { src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDbDx2dVOi_VRx7H5jCpUv4LeMZZn9siqo&libraries=places"},
     { src: "https://unpkg.com/swiper/swiper-bundle.min.js"},
     { src: "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=AIzaSyDbDx2dVOi_VRx7H5jCpUv4LeMZZn9siqo"}

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
    '@/assets/scss/style.scss'
  ],

  js:[

    '@/assets/js/style.js'
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/bootstrap.js',
    '~/plugins/axios.js'


  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  env: {
    // BASE_URL: 'https://nuxtjs.org',
    // API_SECRET: '1234'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
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
