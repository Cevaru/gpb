module.exports = {
  head: {
    title: 'gpb',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  plugins: [
    {src: '~/plugins/persisted-state.js', ssr: false},
  ],
  loading: { color: '#3B8070' },
  build: {
    
  },
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
};