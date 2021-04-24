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
