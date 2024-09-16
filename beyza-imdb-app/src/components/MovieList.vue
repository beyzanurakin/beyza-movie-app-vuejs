<template>
  <div>
    <h2>Film Listesi</h2>
    <div class="search-bar-container">
      <input type="text" v-model="searchQuery" placeholder="Search for a movie..." class="search-bar" />
    </div>
    <ul>
      <li v-for="item in filteredMovies" :key="item.id">
        <MovieCard :movie="item" showFavoriteButton />
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import axios from 'axios';
import MovieCard from './MovieCard.vue';
import { mapActions } from 'vuex';

export default {
  name: 'MovieList',
  components: {
    MovieCard
  },
  setup() {
    const movies = ref([]);
    const searchQuery = ref('');

    const fetchMovies = () => {
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=348088421ad3fb3a9d6e56bb6a9a8f80`;

      axios.get(url)
        .then(response => {
          movies.value = response.data.results;
        })
        .catch(error => {
          console.error(error);
        });
    };

    const filteredMovies = computed(() => {
      if (searchQuery.value.length < 3) {
        return movies.value;
      }
      return movies.value.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    return {
      movies,
      searchQuery,
      filteredMovies,
      ...mapActions(['toggleFavorite']),
      fetchMovies
    };
  },
  mounted() {
    this.fetchMovies();
  }
};
</script>

<style>
* {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

li {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  width: 200px;
}

.relase-date {
  font-size: 12px;
  color: #666;
}

.movie-poster {
  width: 100%;
  height: auto;
}

.movie-name {
  font-size: 16px;
  font-weight: bold;
  min-height: 40px;
}

.search-bar-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-bar {
  width: 30%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
