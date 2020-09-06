// Inside vue.config.js
module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        manifestOptions: {
            name: '⛅ weather2 ⛅',
            short_name: '⛅'
        },

        themeColor: '#10CCFF',
        msTileColor: '#10CCFF',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        //Default route public/img/icons/...
        iconPaths: {
            favicon32: 'img/icons/favicon-32x32.png',
            favicon16: 'img/icons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
            maskIcon: 'img/icons/safari-pinned-tab.svg',
            msTileImage: 'img/icons/msapplication-icon-144x144.png'
        },

        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'src/service-worker.js',
            // ...other Workbox options...
        }


        // configure the workbox plugin
        // workboxPluginMode: 'GenerateSW'
        //workboxOptions: {
        // swSrc is required in InjectManifest mode.
        //swSrc: 'dev/sw.js',
        // ...other Workbox options...
    }
}