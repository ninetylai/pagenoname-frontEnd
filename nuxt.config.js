module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: '页无名的布落格',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'},
            {hid: 'description', name: 'description', content: '页无名的布落格'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /**
     * Use Plugins 要创建plugins目录 然后内容 就是
     * import vue from 'vue';
     * import 插件 from '插件包';
     *
     * Vue.use(插件)
     */
    plugins: [
    ],
    modules: [
    ],
    /*
    ** Global CSS
    */
    css: [
        //'~assets/css/main.css',
        'font-awesome/css/font-awesome.css',
        {src: '~assets/scss/main.scss', lang: 'sass'}
    ],
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#3B8070'},
    /*
     ** Build configuration
     */
    build: {
        build: {
            vendor: ['axios']
        },
        /*
         ** Run ESLINT on save
         */
        extend (config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
