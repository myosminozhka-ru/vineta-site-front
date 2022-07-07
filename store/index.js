export const state = () => ({
  main: [],
  catalog: [],
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
  addCatalog(state, data) {
    state.catalog = data
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
  addCatalog(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('catalog/sections.php')
        .then((response) => {
          resolve(response);
          context.commit('addCatalog', response);
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
    console.log(data);
  },
  async nuxtServerInit ({ dispatch }) {
    await dispatch('addMain');
    await dispatch('addCatalog');
  }
}

export const getters = {
  getMain(state) {
    return state.main;
  },
  getCatalog(state) {
    return state.catalog;
  },
  getModals(state) {
    return state.modals;
  },
}
