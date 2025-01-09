<template>
  <div>
    <select @change="filterChange($event)">
      <option value="">All Genres</option>
      <option value="Action">Action</option>
      <option value="Drama">Drama</option>
      <option value="Comedy">Comedy</option>
    </select>
    <select @change="sortChange($event)">
      <option value="rating">Rating</option>
      <option value="release_date">Release Date</option>
    </select>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }}
        <button @click="toggleFavourite(movie)">
          {{ movie.isFavourite ? 'Unfavourite' : 'Favourite' }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
    };
  },
  created() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      const apiKey = 'YOUR_API_KEY';
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
      const data = await response.json();
      this.movies = data.results.map(movie => ({
        ...movie,
        isFavourite: false,
      }));
    },
    filterChange(event) {
      this.$emit("filter", event.target.value);
      const selectedMovie = this.movies.find(movie => movie.genre_ids.includes(this.getGenreId(event.target.value)));
      if (selectedMovie) {
        this.$router.push(`/movie/${selectedMovie.id}`);
      }
    },
    sortChange(event) {
      this.$emit("sort", event.target.value);
    },
    getGenreId(genreName) {
      const genres = {
        Action: 28,
        Drama: 18,
        Comedy: 35,
      };
      return genres[genreName];
    },
    toggleFavourite(movie) {
      movie.isFavourite = !movie.isFavourite;
    },
  },
};
</script>