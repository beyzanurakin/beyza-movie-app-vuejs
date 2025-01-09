<template>
    <div>
      <h1>Movie Page</h1>
      <p>Movie ID: {{ movieId }}</p>
      <!-- Film bilgilerini burada gösterin -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        movieId: this.$route.params.id,
      };
    },
  };
  </script>