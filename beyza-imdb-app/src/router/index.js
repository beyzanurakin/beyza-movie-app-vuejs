import { createRouter, createWebHistory } from 'vue-router';
import MovieList from '../components/MovieList.vue';
import FavoriteList from '../components/FavoriteList.vue';

const routes = [
  {
    path: '/',
    name: 'MovieList',
    component: MovieList,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: FavoriteList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
