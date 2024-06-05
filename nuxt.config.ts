// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/common/_mixins.scss" as *; @use "@/assets/scss/common/_variables.scss" as *;'
        }
      }
    }
  },
})
