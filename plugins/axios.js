export default function ({ $axios, redirect, app, $i18n }) {
    $axios.onRequest((config) => {
    //   console.log(app.i18n.localeProperties.code)
      config.params = {
        ...config.params,
        lang: app.i18n.localeProperties.code,
      };
    });
}