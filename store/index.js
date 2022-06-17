export const state = () => ({
  main: [],
  catalog: []
})

export const mutations = {
  addMain(state, data) {
    state.main = data
  },
  addCatalog(state, data) {
    state.catalog = data
  },
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
}
