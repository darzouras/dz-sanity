import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/sanity'],
  sanity: {
    projectId: 'zugazhip',
    apiVersion: '2022-03-25',
    dataset: 'production'
  },

  css: [
    '~/assets/css/main.scss'
  ]
})
