const path = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: './laravel/.env' })

module.exports = {
  outputDir: 'desktop/dist',
  configureWebpack: {
    plugins: [],
    entry: {
      app: './desktop/main.js',
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'desktop'))
    config.resolve.alias.set('@services', path.resolve(__dirname, 'desktop/services'))
    config.resolve.alias.set('@router', path.resolve(__dirname, 'desktop/router'))
    config.resolve.alias.set('@components', path.resolve(__dirname, 'desktop/components'))
    config.resolve.alias.set('@layouts', path.resolve(__dirname, 'desktop/layouts'))
    config.resolve.alias.set('@pages', path.resolve(__dirname, 'desktop/views'))
    config.resolve.symlinks(false)
    config.resolve.alias.set('vue', path.resolve('./node_modules/vue'))
  }
};
