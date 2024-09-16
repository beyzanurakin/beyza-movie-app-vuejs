import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      favorites: []
    };
  },
  mutations: {
    addFavorite(state, movie) {
      if (!state.favorites.some(fav => fav.id === movie.id)) {
        state.favorites.push(movie);
      }
    },
    removeFavorite(state, movieId) {
      state.favorites = state.favorites.filter(fav => fav.id !== movieId);
    },
    setFavorites(state, movies) {
      state.favorites = movies;
    }
  },
  actions: {
    toggleFavorite({ commit, state }, movie) {
      if (state.favorites.some(fav => fav.id === movie.id)) {
        commit('removeFavorite', movie.id);
        console.log('add');
      } else {
        commit('addFavorite', movie);
        console.log('remove');
      }
    },
    initializeFavorites({ commit }, movies) {
      commit('setFavorites', movies);
    }
  },
  getters: {
    favorites: (state) => state.favorites,
    isFavorited: (state) => (movieId) => {
      return state.favorites.some(fav => fav.id === movieId);
    }
  }
});

export default store;
