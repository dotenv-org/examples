import install from '@edgio/devtools/install'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hook('app:mounted', () => {
    install()
  })
})
