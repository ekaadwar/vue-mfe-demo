const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const deps = require('./package.json').dependencies

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'auto',
  devServer: {
    host: '127.0.0.1',
    port: 5000,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'host_shell_vue_cli',
        remotes: {
          kost: 'kost@http://127.0.0.1:5003/remoteEntry.js'
        },
        shared: {
          vue: {
            singleton: true,
            eager: false,
            requiredVersion: deps.vue
          },
          'vue-router': {
            singleton: true,
            eager: false,
            requiredVersion: deps['vue-router']
          }
        }
      })
    ]
  }
})
