const path = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: './laravel/.env' })

module.exports = {
  outputDir: 'desktop/dist',
  configureWebpack: {
    plugins: [],
    entry: {
      app: './desktop/main.ts',
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'desktop'))
    config.resolve.symlinks(false)
    config.resolve.alias.set('vue', path.resolve('./node_modules/vue'))
  }
}
