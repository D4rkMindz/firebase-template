import { secrets } from './secrets'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Firebase App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://firebase.nuxtjs.org/
    '@nuxtjs/firebase',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Firebase module configuration: https://firebase.nuxtjs.org/guide/usage
  firebase: {
    config: {
      apiKey: secrets.firebase.apiKey,
      authDomain: secrets.firebase.authDomain,
      projectId: secrets.firebase.projectId,
      storageBucket: secrets.firebase.storageBucket,
      messagingSenderId: secrets.firebase.messagingSenderId,
      appId: secrets.firebase.appId,
      measurementId: secrets.firebase.measurementId,
    },
    services: {
      auth: {
        persistence: 'local', // default
        ssr: false, // default
      },
      firestore: true,
      storage: true,
      functions: {
        // only take the first one, its only relevant for local emulation
        location: secrets.firebase.regions[0],
      },
      performance: true,
      analytics: {
        collectionEnabled: true, // default
      },
      remoteConfig: {
        settings: {
          fetchTimeoutMillis: 60000, // default
          minimumFetchIntervalMillis: 43200000, // default
        },
        defaultConfig: {
          'init': '<test>',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
