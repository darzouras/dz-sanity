import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/sanity'
  ],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  sanity: {
    projectId: 'zugazhip',
    apiVersion: '2022-03-25',
    dataset: 'production'
  },

  css: [
    '~/assets/css/main.scss'
  ],
  styleResources: {
    scss: ['~/assets/css/main.scss']
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/_variables.scss";',
        },
      },
    },
  },
})
