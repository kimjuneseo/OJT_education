const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    port: 3000
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
})
