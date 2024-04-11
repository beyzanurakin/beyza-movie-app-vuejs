<template>
    <div class="movie-card">
      <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" :alt="movie.title" class="movie-poster">
      <div class="movie-details">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.release_date }}</p>
        <p>{{ movie.genres.map(genre => genre.name).join(', ') }}</p>
        <p>{{ movie.overview }}</p>
        <p>IMDb Rating: {{ movie.vote_average }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      movie: Object
    }
  }
  </script>
  
  <style scoped>
  .movie-card {
    display: flex;
    margin-bottom: 20px;
  }
  
  .movie-poster {
    width: 200px;
    height: auto;
    margin-right: 20px;
  }
  
  .movie-details {
    flex: 1;
  }
  </style>
  