export const state = () => ({
  main: [],
  main2: [],
  catalog: [],
  vacancies: [],
  modals: {
    buy: {
      isOpened: false
    }
  }
})

export const mutations = {
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
  toggleBuyModal(state, data) {
    state.modals.buy = data;
  }
}

export const actions = {
  addMain(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('slider.php')
        .then((response) => {
          resolve(response);
          context.commit('addMain', response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  addMainMore(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('main.php')
        .then((response) => {
          resolve(response);
          context.commit('addMainMore', response);
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
  toggleModal(context, data) {
    if (data.type === 'buy') {
      context.commit('toggleBuyModal', {
        isOpened: data.isOpened
      });
    }
  },
  async nuxtServerInit ({ dispatch }) {
    await dispatch('addMain');
    await dispatch('addMainMore');
    await dispatch('addCatalog');
    await dispatch('addVacancies');
  }
}

export const getters = {
  getMain(state) {
    return state.main;
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
}
