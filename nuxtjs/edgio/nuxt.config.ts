// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      HELLO: process.env.HELLO
    }
  },
  devtools: { enabled: true }
})

