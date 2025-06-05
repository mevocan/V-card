export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Durmuş Küçük',
      meta: [
        { name: 'description', content: 'Durmuş Küçük' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
      ]
    }
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/global.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ]
})
