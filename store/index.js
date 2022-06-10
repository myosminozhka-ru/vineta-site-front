export const state = () => ({
  main: [],
})

export const mutations = {
  addMain(state, data) {
    state.main = data
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
}

export const getters = {
  getMain(state) {
    return state.main;
  },
}
