export default defineNuxtConfig({
    extends: ['content-wind'],
    modules: [
        '@nuxt/content',
        '@nuxtjs/mdc',
        '@nuxt/ui',
        '@element-plus/nuxt'
    ],
    devtools: {
        enabled: false
    },
    elementPlus: {}
})
