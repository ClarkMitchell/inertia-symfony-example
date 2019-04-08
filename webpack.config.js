var Encore = require('@symfony/webpack-encore');
var path = require('path');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/js/app.js')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .configureBabel(() => {}, {
        useBuiltIns: 'usage',
        corejs: 3
    })
    .enableVueLoader()
;

let config = Encore.getWebpackConfig();

config.resolve.alias = {
  'vue$': 'vue/dist/vue.runtime.js',
  '@': path.resolve(__dirname, './assets')
};

module.exports = config;
