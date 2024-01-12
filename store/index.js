export const state = () => ({
  main: [],
  main2: {},
  catalog: [],
  vacancies: [],
  contacts: [],
  history: [],
  about: {},
  licenses: [],
  news: [],
  partners: [],
  products: [],
  filters: {},
  selectedNewsType: 'Новости',
  downloads: [],
  breadcrumbs: [],
  galleryIndex: null,
  isDataLoaded: false,
  catalogFilters: [],
  modals: {
    buy: {
      isOpened: false,
    },
    favorites: {
      isOpened: false,
    },
    mobileMenu: {
      isOpened: false,
    },
    search: {
      isOpened: false,
    },
    apply: {
      isOpened: false,
    },
  },
  seo: {},
  technology: {},
  isLoading: true,
  dataVacancy: [],
  dataProduct: [],
  dataProductOther: [],
  dataNews: []
})

export const mutations = {
  setLoadedStatus(state, data) {
    state.isDataLoaded = data
  },
  setCatalogFilters(state, data) {
    state.catalogFilters = JSON.parse(data)
  },
  setGalleryIndex(state, data) {
    state.galleryIndex = data
  },
  addBreadcrumbs(state, data) {
    state.breadcrumbs = data
  },
  addFilters(state, data) {
    state.filters = data
  },
  addDownloads(state, data) {
    state.downloads = data
  },
  addMain(state, data) {
    state.main = data
  },
  addMainMore(state, data) {
    state.main2 = data
  },
  addCatalog(state, data) {
    state.catalog = data
  },
  addVacancies(state, data) {
    state.vacancies = data
  },
  addContacts(state, data) {
    state.contacts = data
  },
  addAbout(state, data) {
    state.about = data
  },
  addHistory(state, data) {
    state.history = data
  },
  addLicenses(state, data) {
    state.licenses = data
  },
  addNews(state, data) {
    state.news = data
  },
  addPartners(state, data) {
    state.partners = data
  },
  addProducts(state, data) {
    state.products = data
  },
  addSelectedNewsType(state, data) {
    state.selectedNewsType = data
  },
  toggleBuyModal(state, data) {
    state.modals.buy = data
  },
  toggleMobileMenu(state, data) {
    state.modals.mobileMenu = data
  },
  toggleSearch(state, data) {
    state.modals.search = data
  },
  toggleFavorites(state, data) {
    state.modals.favorites = data
  },
  toggleApply(state, data) {
    state.modals.apply = data
  },
  addSeo(state, data) {
    state.seo = data
  },
  addTechnology(state, data) {
    state.technology = data
  },
  setLoadingStatus(state, status) {
    state.isLoading = status;
  },
  setDataVacancy(state, data) {
    state.dataVacancy = data
  },
  setDataProduct(state, data) {
    state.dataProduct = data
  },
  setDataProductOther(state, data) {
    state.dataProductOther = data
  },
  setDataNews(state, data) {
    state.dataNews = data
  }
}

export const actions = {
  setDataVacancy({commit}, data) {
    commit('setDataVacancy', data)
  },
  setDataProduct({commit}, data) {
    commit('setDataProduct', data)
  },
  setDataProductOther({commit}, data) {
    commit('setDataProductOther', data)
  },
  setDataNews({commit}, data) {
    commit('setDataNews', data)
  },
  setCatalogFilters(context, data) {
    context.commit('setCatalogFilters', data)
  },
  setLoadedStatus(context, data = true) {
    context.commit('setLoadedStatus', data)
  },
  addBreadcrumbs(context, data) {
    context.commit('addBreadcrumbs', data)
  },
  setGalleryIndex(context, data) {
    context.commit('setGalleryIndex', data)
  },
  addSelectedNewsType(context, data) {
    context.commit('addSelectedNewsType', data)
  },
  addFilters(context, data) {
    context.commit('addFilters', data)
  },
  addDownloads(context) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('downloads.php')
        .then((response) => {
          resolve(response)
          context.commit('addDownloads', response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  addMain(context) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('slider.php')
        .then((response) => {
          resolve(response)
          context.commit('addMain', response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  addMainMore(context) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('main.php')
        .then((response) => {
          resolve(response)
          context.commit('addMainMore', response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  addCatalog(context) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('catalog/tree.php')
        .then((response) => {
          context.commit('addCatalog', response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  addVacancies(context) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('vacancy.php')
        .then((response) => {
          context.commit('addVacancies', response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  addContacts(context) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('contact.php')
        .then((response) => {
          context.commit('addContacts', response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  addAbout(context) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('about.php')
        .then((response) => {
          context.commit('addAbout', response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  addHistory(context) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('history.php')
        .then((response) => {
          context.commit('addHistory', response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  addLicenses(context) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('license.php')
        .then((response) => {
          context.commit('addLicenses', response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  addNews(context) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('news.php')
        .then((response) => {
          context.commit('addNews', response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  addPartners(context) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('client.php')
        .then((response) => {
          context.commit('addPartners', response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  addProducts(context) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('catalog/elements_all.php')
        .then((response) => {
          context.commit('addProducts', response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  toggleModal(context, data) {
    if (data.type === 'buy') {
      context.commit('toggleBuyModal', {
        isOpened: data.isOpened,
      })
    }
    if (data.type === 'mobileMenu') {
      context.commit('toggleMobileMenu', {
        isOpened: data.isOpened,
      })
    }
    if (data.type === 'search') {
      context.commit('toggleSearch', {
        isOpened: data.isOpened,
      })
    }
    if (data.type === 'favorites') {
      context.commit('toggleFavorites', {
        isOpened: data.isOpened,
      })
    }
    if (data.type === 'apply') {
      context.commit('toggleApply', {
        isOpened: data.isOpened,
      })
    }
  },
  addSeo(context) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('seo.php')
        .then((response) => {
          context.commit('addSeo', response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  addTechnology(context) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('technology.php')
        .then((response) => {
          context.commit('addTechnology', response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  setLoadingStatus({commit}, status) {
    commit('setLoadingStatus', status);
  },

  async nuxtServerInit({ dispatch, state }) {
    if (!state.products.length) {
      await dispatch('addProducts')
    }

    if (!Object.keys(state.seo).length) {
      await dispatch('addSeo')
    }

    if (!state.contacts.length) {
      await dispatch('addContacts')
    }

    if (!Object.keys(state.downloads).length) {
      await dispatch('addDownloads')
    }

    if(!state.catalog.length) {
      await dispatch('addCatalog')
    }
  }
  //   await dispatch('setLoadingStatus', true)
  //   await dispatch('addMain')
  //   await dispatch('addMainMore')
  //   await dispatch('addCatalog')
  //   await dispatch('addContacts')
  //   await dispatch('addLicenses')
  //   await dispatch('addNews')
  //   await dispatch('addPartners')
  //   await dispatch('addProducts')
  //   await dispatch('addDownloads')
  //   await dispatch('setLoadedStatus')
  //   await dispatch('addSeo')
  //   await dispatch('addAbout')
  //   await dispatch('setLoadingStatus', false)
  // },
}

export const getters = {
  getMain(state) {
    return state.main
  },
  getBreadcrumbs(state) {
    return state.breadcrumbs
  },
  getMainMore(state) {
    return state.main2
  },
  getCatalog(state) {
    return state.catalog
  },
  getVacancies(state) {
    return state.vacancies
  },
  getModals(state) {
    return state.modals
  },
  getContacts(state) {
    return state.contacts
  },
  getAbout(state) {
    return state.about
  },
  getHistory(state) {
    return state.history
  },
  getLicenses(state) {
    return state.licenses
  },
  getNews(state) {
    return state.news
  },
  getPartners(state) {
    return state.partners
  },
  getProducts(state) {
    return state.products
  },
  getFilters(state) {
    return state.filters
  },
  getSelectedNewsType(state) {
    return state.selectedNewsType
  },
  getDownloads(state) {
    return state.downloads
  },
  galleryIndex(state) {
    return state.galleryIndex
  },
  getLoadedStatus(state) {
    // return state.isDataLoaded
    return state.isLoading
  },
  getCatalogFilters(state) {
    return state.catalogFilters
  },
  getSeo(state) {
    const result = {}
    for (const key in state.seo) {
      result[key] = state.seo[key]
    }
    return result
  },
  getDownloadsByCode(state) {
    const result = {}
    for (const key in state.downloads) {
      result[key] = state.seo[key]
    }
    return result
  },
  getTechnology(state) {
    return state.technology.technology
  },
  getTechnologyByIndex(state){
    const result = {}
    for (const key in state.technology.technology) {
      result[key] = state.technology.technology[key]
    }
    return result
  }
}
