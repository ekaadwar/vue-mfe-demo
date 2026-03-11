const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const deps = require('./package.json').dependencies

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'auto',
  devServer: {
    host: '127.0.0.1',
    port: 4999,
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
          kost: 'kost@http://127.0.0.1:5003/remoteEntry.js',
          hotels: `promise new Promise((resolve, reject) => {
            const url = 'http://127.0.0.1:5001/assets/remoteEntry.js';

            import(/* webpackIgnore: true */ url)
              .then((remote) => {
                resolve({
                  get: remote.get,
                  init: (shareScope) => {
                    try {
                      return remote.init(shareScope);
                    } catch (e) {
                      console.log('hotels remote already initialized');
                    }
                  }
                });
              })
              .catch(reject);
          })`
        },
        shared: {
          vue: {
            singleton: true,
            eager: false,
            requiredVersion: deps.vue
          },
          pinia: {
            singleton: true,
            eager: false,
            requiredVersion: deps.pinia
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
