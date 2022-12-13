export default function ({ app }) {
  // onBeforeLanguageSwitch called right before setting a new locale
  app.i18n.onBeforeLanguageSwitch = async (oldLocale, newLocale) => {
    await Promise.all([
      app.store.dispatch('addDownloads'),
      app.store.dispatch('addMain'),
      app.store.dispatch('addMainMore'),
      app.store.dispatch('addCatalog'),
      app.store.dispatch('addVacancies'),
      app.store.dispatch('addContacts'),
      app.store.dispatch('addAbout'),
      app.store.dispatch('addHistory'),
      app.store.dispatch('addLicenses'),
      app.store.dispatch('addNews'),
      app.store.dispatch('addPartners'),
      app.store.dispatch('addProducts'),
    ])
  }
}
