<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/favorites">Favorites</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
nav {
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #f8f9fa;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #007bff;
}
</style>
