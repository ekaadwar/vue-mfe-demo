const { defineConfig } = require('@vue/cli-service')
const { container } = require('webpack')
const { ModuleFederationPlugin } = container

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'http://127.0.0.1:5003/',
  configureWebpack: {
    output: {
      publicPath: 'http://127.0.0.1:5003/',
      uniqueName: 'mfe_kost_v2'
    },
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'kost',
        filename: 'remoteEntry.js',
        exposes: {
          './KostApp': './src/exposes/KostApp.vue'
        },
        shared: {
          vue: {
            singleton: true,
            requiredVersion: '^3.2.13'
          }
        }
      })
    ]
  },
  devServer: {
    host: '127.0.0.1',
    port: 5003,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
