const webpack = require("webpack");
module.exports = {
    mode: "universal",
    server: {
        host: "192.168.12.183",
        port: 3001
    },
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: ["element-ui/lib/theme-chalk/index.css", "swiper/dist/css/swiper.css"],
    script: [{
        // src: "http://api.map.baidu.com/api?v=2.0&ak=Y9KRKIC73FsfZhtDFsh84byKV5qGx9vf",
        // type: "text/javascript"
    }],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        // { src: '@/plugins/element-ui', ssr: false },
        // { src: '@/plugins/axios', ssr: true },
        {
            src: "@/plugins/vue-awesome-swiper",
            ssr: false
        }
        // {
        //     src: "@/plugins/baidu-map",
        //     ssr: false
        // }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    devModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: ["@nuxtjs/axios"],
    axios: {
        proxy: true,
        // prefix: '/api/',
        credentials: true
    },
    proxy: {
        "/api": "http://39.97.242.38"
    },
    /*
     ** Build configuration
     */
    build: {
        transpile: [/^element-ui/],
        // vendor: ["baidu-map"],
        // plugins: [
        //     new webpack.ProvidePlugin({
        //         BMap1: "baidu-map"
        //     })
        // ],
        /*
         ** You can extend webpack config here
         */
        extend(config, { isDev, isClient }) {
            // if (isDev && isClient) {
            //     config.module.rules.push({
            //         enforce: "pre",
            //         test: /\.(js|vue)$/,
            //         loader: "eslint-loader",
            //         exclude: /(node_modules)/
            //     });
            // }
        }
    }
};