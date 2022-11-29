export default function ({ $axios, redirect, app, $i18n }) {
  $axios.onRequest((config) => {
    config.params = {
      ...config.params,
      lang: app.i18n.localeProperties.code,
    }
  })
}
