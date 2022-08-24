export default function ({ app }) {
    // onBeforeLanguageSwitch called right before setting a new locale
    app.i18n.onBeforeLanguageSwitch = async (oldLocale, newLocale, isInitialSetup) => {
        // console.log(oldLocale, newLocale, isInitialSetup, app.store)
        await app.store.dispatch('addMain');
        await app.store.dispatch('addMainMore');
        await app.store.dispatch('addCatalog');
        await app.store.dispatch('addVacancies');
        await app.store.dispatch('addContacts');
        await app.store.dispatch('addAbout');
        await app.store.dispatch('addHistory');
        await app.store.dispatch('addLicenses');
        await app.store.dispatch('addNews');
        await app.store.dispatch('addPartners');
        await app.store.dispatch('addProducts');
        await app.store.dispatch('addDownloads');
    }
    // onLanguageSwitched called right after a new locale has been set
    // app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    //   console.log(oldLocale, newLocale, app.store)
    // }
}