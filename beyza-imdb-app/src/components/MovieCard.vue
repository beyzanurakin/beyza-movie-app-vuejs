<template>
  <div class="movie-card">
    <img class="movie-poster" :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" :alt="movie.title" />
    <p class="movie-name">{{ movie.title }}</p>
    <p class="release-date">{{ movie.release_date }}</p>
    <span>{{ Math.floor(movie.vote_average) }}</span>

    <button v-if="showFavoriteButton" @click="toggleFavorite(movie)">
      <span v-if="isFavorited(movie.id)">★</span>
      <span v-else>☆</span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true
    },
    showFavoriteButton: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['isFavorited'])
  },
  methods: {
    ...mapActions(['toggleFavorite'])
  }
};
</script>

<style scoped>
.movie-poster {
  width: 100%;
  height: auto;
}

.movie-name {
  font-size: 16px;
  font-weight: bold;
  min-height: 40px;
}

.release-date {
  font-size: 12px;
  color: #666;
}

button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
