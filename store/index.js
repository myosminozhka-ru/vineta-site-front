export const state = () => ({
  main: [],
  main2: [],
  catalog: [],
  vacancies: [],
  contacts: [],
  history: [],
  about: {},
  licenses: [],
  news: [],
  partners: [],
  products: [],
  filters: [],
  selectedNewsType: 'Новости',
  downloads: [],
  breadcrumbs: [],
  galleryIndex: null,
  isDataLoaded: false,
  catalogFilters: [],
  modals: {
    buy: {
      isOpened: false
    },
    favorites: {
      isOpened: false
    },
    mobileMenu: {
      isOpened: false
    },
    search: {
      isOpened: false
    },
    apply: {
      isOpened: false
    }
  }
})

export const mutations = {
  setLoadedStatus(state, data) {
    state.isDataLoaded = data
  },
  setCatalogFilters(state, data) {
    console.log(data);
    state.catalogFilters = data;
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
    state.modals.buy = data;
  },
  toggleMobileMenu(state, data) {
    state.modals.mobileMenu = data;
  },
  toggleSearch(state, data) {
    state.modals.search = data;
  },
  toggleFavorites(state, data) {
    state.modals.favorites = data;
  },
  toggleApply(state, data) {
    state.modals.apply = data;
  },
}

export const actions = {
  setCatalogFilters(context, data) {
    context.commit('setCatalogFilters', data);
  },
  setLoadedStatus(context) {
    context.commit('setLoadedStatus', true);
  },
  addBreadcrumbs(context, data) {
    context.commit('addBreadcrumbs', data);
  },
  setGalleryIndex(context, data) {
    context.commit('setGalleryIndex', data);
  },
  addSelectedNewsType(context, data) {
    context.commit('addSelectedNewsType', data);
  },
  addFilters(context, data) {
    // console.log('addFilters', data)
    context.commit('addFilters', data);
  },
  addDownloads(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('downloads.php')
        .then((response) => {
          resolve(response);
          context.commit('addDownloads', response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addMain(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('slider.php')
        .then((response) => {
          resolve(response);
          context.commit('addMain', response);
          // console.log('addMain', response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addMainMore(context) {
    return new Promise((resolve, reject) => {
      // console.log('addMainMore');
      this.$axios.$get('main.php')
        .then((response) => {
          resolve(response);
          context.commit('addMainMore', response);
          // console.log('addMainMore', response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addCatalog(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('catalog/sections.php')
        .then((response) => {
          context.commit('addCatalog', response);
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addVacancies(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('vacancy.php')
        .then((response) => {
          context.commit('addVacancies', response);
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addContacts(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('contact.php')
        .then((response) => {
          context.commit('addContacts', response);
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addAbout(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('about.php')
        .then((response) => {
          context.commit('addAbout', response);
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addHistory(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('history.php')
        .then((response) => {
          context.commit('addHistory', response);
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addLicenses(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('license.php')
        .then((response) => {
          context.commit('addLicenses', response);
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addNews(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('news.php')
        .then((response) => {
          context.commit('addNews', response);
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addPartners(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('client.php')
        .then((response) => {
          context.commit('addPartners', response);
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addProducts(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('catalog/elements_all.php')
        .then((response) => {
          context.commit('addProducts', response);
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  toggleModal(context, data) {
    if (data.type === 'buy') {
      context.commit('toggleBuyModal', {
        isOpened: data.isOpened
      });
    }
    if (data.type === 'mobileMenu') {
      context.commit('toggleMobileMenu', {
        isOpened: data.isOpened
      });
    }
    if (data.type === 'search') {
      // console.log(data)
      context.commit('toggleSearch', {
        isOpened: data.isOpened
      });
    }
    if (data.type === 'favorites') {
      // console.log(data)
      context.commit('toggleFavorites', {
        isOpened: data.isOpened
      });
    }
    if (data.type === 'apply') {
      // console.log(data)
      context.commit('toggleApply', {
        isOpened: data.isOpened
      });
    }
  },
  async nuxtServerInit ({ dispatch }) {
    await dispatch('addMain');
    await dispatch('addMainMore');
    await dispatch('addCatalog');
    await dispatch('addVacancies');
    await dispatch('addContacts');
    await dispatch('addAbout');
    await dispatch('addHistory');
    await dispatch('addLicenses');
    await dispatch('addNews');
    await dispatch('addPartners');
    await dispatch('addProducts');
    await dispatch('addDownloads');
    await dispatch('setLoadedStatus');
    console.log('fetch data');
  }
}

export const getters = {
  getMain(state) {
    return state.main;
  },
  getBreadcrumbs(state) {
    return state.breadcrumbs;
  },
  getMainMore(state) {
    return state.main2;
  },
  getCatalog(state) {
    return state.catalog;
  },
  getVacancies(state) {
    return state.vacancies;
  },
  getModals(state) {
    return state.modals;
  },
  getContacts(state) {
    return state.contacts;
  },
  getAbout(state) {
    return state.about;
  },
  getHistory(state) {
    return state.history;
  },
  getLicenses(state) {
    return state.licenses;
  },
  getNews(state) {
    return state.news;
  },
  getPartners(state) {
    return state.partners;
  },
  getProducts(state) {
    return state.products;
  },
  getFilters(state) {
    return state.filters;
  },
  getSelectedNewsType(state) {
    return state.selectedNewsType;
  },
  getDownloads(state) {
    return state.downloads;
  },
  galleryIndex(state) {
    return state.galleryIndex;
  },
  getLoadedStatus(state) {
    return state.isDataLoaded;
  },
  getCatalogFilters(state) {
    return state.catalogFilters;
  },
}
