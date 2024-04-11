// movieService.js

import axios from 'axios';

const API_URL = 'https://api.example.com'; // API URL'nizi buraya ekleyin

export default {
  getMovies() {
    return axios.get(`${API_URL}/movies`);
  }
}
