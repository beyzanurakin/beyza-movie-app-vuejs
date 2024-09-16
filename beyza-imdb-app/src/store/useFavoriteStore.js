import { ref } from 'vue';

export default function useFavoriteStore() {
  const favorites = ref([]);

  const toggleFavorite = (movie) => {
    const index = favorites.value.findIndex(fav => fav.id === movie.id);
    if (index !== -1) {
      favorites.value.splice(index, 1);
    } else {
      favorites.value.push(movie);
    }
  };

  const isFavorited = (movie) => {
    return favorites.value.some(fav => fav.id === movie.id);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorited,
  };
}
