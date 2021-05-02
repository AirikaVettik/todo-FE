module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  }
}


/* ,et teie rakendusel see tailwind osa töötaks siis on vaja vue.config.js faili lisada see conf 
  pwa: {
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://unpkg.com/tailwindcss'),
          handler: 'cacheFirst',
          method: 'GET'
        },
        {
          urlPattern: new RegExp('img/icons'),
          handler: 'cacheFirst',
          method: 'GET'
        }
      ]
    },
    staticFileGlobs: ['dist/**/
    /* *.{js,html,css,png,svg}']
    https://www.webnoob.dev/articles/turn-your-vue-web-app-into-a-pwa
  }  */
