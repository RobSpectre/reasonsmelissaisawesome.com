// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  routeRules: {
    '/submit': { redirect: '/' }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'vue3-carousel-nuxt'
  ],
  css: ['~/assets/sass/style.sass'],
  build: {
    loaders: {
      vue: {
        pugPlain: true
      }
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      })
    }
  }
})
