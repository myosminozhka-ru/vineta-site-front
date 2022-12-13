export const state = () => ({
    favorites: []
});

export const mutations = {
    addFavorites(state, data) {
        if (state.favorites.includes(+data)) {
            state.favorites = state.favorites.filter(item => item !== +data)
        } else {
            state.favorites.push(+data);
        }
    },
    clearFavorites(state) {
        state.favorites = [];
    },
}

export const actions = {
    addFavorites(context, data) {
        context.commit('addFavorites', data);
    },
    clearFavorites(context) {
        context.commit('clearFavorites');
    }
}

export const getters = {
    getFavorites(state) {
      return state.favorites;
    },
}