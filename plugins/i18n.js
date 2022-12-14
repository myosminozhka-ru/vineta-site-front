export default function ({ app }) {
  // onBeforeLanguageSwitch called right before setting a new locale
  app.i18n.onBeforeLanguageSwitch = (oldLocale, newLocale) => {
    setTimeout(async () => {
      await Promise.all([
        await app.store.dispatch('addMain'),
        await app.store.dispatch('addMainMore'),
        await app.store.dispatch('addCatalog'),
        await app.store.dispatch('addContacts'),
        await app.store.dispatch('addLicenses'),
        await app.store.dispatch('addNews'),
        await app.store.dispatch('addPartners'),
        await app.store.dispatch('addProducts'),
        await app.store.dispatch('addDownloads'),
        await app.store.dispatch('setLoadedStatus'),
        await app.store.dispatch('addSeo'),
        await app.store.dispatch('addAbout'),
      ])
    }, 0)
  }
}
