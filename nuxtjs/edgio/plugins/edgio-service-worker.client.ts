import install from '@edgio/prefetch/window/install'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hook('app:mounted', () => {
    install()
  })
})
