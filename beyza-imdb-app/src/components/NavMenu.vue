<template>
    <nav>
      <ul>
        <li>
          <div class="dropdown">
            Movies
            <div class="dropdown-content">
              <router-link to="/movies/popular">Popular</router-link>
              <router-link to="/movies/upcoming">Upcoming</router-link>
              <router-link to="/movies/top-rated">Top Rated</router-link>
            </div>
          </div>
        </li>
        <li>
          <div class="dropdown">
            TV Shows
            <div class="dropdown-content">
              <router-link to="/tvshows/popular">Popular</router-link>
              <router-link to="/tvshows/upcoming">Upcoming</router-link>
              <router-link to="/tvshows/top-rated">Top Rated</router-link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavMenu",
  };
  </script>
  
  <style>
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }
  </style>
  