export default function ({ app }) {
  // onBeforeLanguageSwitch called right before setting a new locale
  app.i18n.onBeforeLanguageSwitch = (oldLocale, newLocale) => {
    setTimeout(async () => {
      await Promise.all([
        app.store.dispatch('setLoadingStatus', true),
        app.store.dispatch('addMain'),
        app.store.dispatch('addMainMore'),
        app.store.dispatch('addCatalog'),
        app.store.dispatch('addContacts'),
        app.store.dispatch('addLicenses'),
        app.store.dispatch('addNews'),
        app.store.dispatch('addTechnology'),
        app.store.dispatch('addHistory'),
        app.store.dispatch('addPartners'),
        app.store.dispatch('addProducts'),
        app.store.dispatch('addDownloads'),
        app.store.dispatch('setLoadedStatus'),
        app.store.dispatch('addSeo'),
        app.store.dispatch('addAbout'),
      ]).then(() => {
        app.store.dispatch('setLoadingStatus', false)
      })
    }, 0)
  }
}
