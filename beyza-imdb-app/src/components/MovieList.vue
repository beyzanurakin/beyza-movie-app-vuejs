<template>
    <div>
      <h2>Film Listesii</h2>
      <ul>
          <li v-for="item in movies" :key="item.id">
            <img class="movie-poster" :src="'https://image.tmdb.org/t/p/w500/' + item.poster_path" :alt="item.title">
            <p class="movie-name">{{ item.title }}</p>
            <p class="relase-date">{{ item.release_date }}</p>
            <span> {{ Math.floor(item.vote_average) }}</span>
        </li>
    </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    name: 'MovieList',
    data() {
    return {
      movies: []
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    fetchMovies() {

      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=348088421ad3fb3a9d6e56bb6a9a8f80')
        .then(response => {
          this.movies = response.data.results;
          console.log(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  }
  </script>
<style scoped>
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
</style>
  