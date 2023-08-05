// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      NUXT_PUBLIC_HELLO: process.env.NUXT_PUBLIC_HELLO
    }
  },
  devtools: { enabled: true }
})
