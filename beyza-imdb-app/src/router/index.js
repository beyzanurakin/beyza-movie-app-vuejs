import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/movies/popular", component: () => import("../views/Movies/Popular.vue") },
  { path: "/movies/upcoming", component: () => import("../views/Movies/Upcoming.vue") },
  { path: "/movies/top-rated", component: () => import("../views/Movies/TopRated.vue") },
  { path: "/tvshows/popular", component: () => import("../views/TVShows/Popular.vue") },
  { path: "/tvshows/upcoming", component: () => import("../views/TVShows/Upcoming.vue") },
  { path: "/tvshows/top-rated", component: () => import("../views/TVShows/TopRated.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
