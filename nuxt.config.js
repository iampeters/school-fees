export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'payaza-fx',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOriginIsolated: true,
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
        rel: 'stylesheet',
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/styles.css',
    '~/assets/css/tailwind.css',
    '~/assets/css/element_customization/styles.scss',
    // '~/assets/css/extented_tailwind/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/document-resize.client.js',
    { src: '~/plugins/element-ui.js' },
    { src: '~/plugins/pincode.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-import': true,
        'tailwindcss/nesting': {}, 
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    encryption_salt: process.env.ENCRYPTION_SALT,
    encryption_password: process.env.ENCRYPTION_PASSWORD,
    encryption_iv: process.env.ENCRYPTION_IV,
    algorithm_key_len: process.env.ALGORITHM_KEY_LEN,
    iteration_count: process.env.ITERATION_COUNT,
    encryption_cipher_algorithm: process.env.ENCRYPTION_CIPHER_ALGORITHM,
    verifyURL: process.env.VERIFY_URL,
    isStaging: process.env.STAGING,
  },
}
