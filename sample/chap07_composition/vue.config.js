const path = require('path');

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Chap10 VueX'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@":            path.resolve(__dirname, "src/"),
        "@component":   path.resolve(__dirname, "src/components/"),
        "@views":       path.resolve(__dirname, "src/views/"),
        "@assets":      path.resolve(__dirname, "src/assets/"),
        "@modules":     path.resolve(__dirname, "src/modules"),
        "@api":         path.resolve(__dirname, "src/api")
      },
      extensions: ['vue']
    }
  },
  devServer: {
    port: process.env.APP_PORT || 5000,
  },
}