import Vue from 'vue';
import Router from 'vue-router';
import MoviePage from '@/components/MoviePage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/movie/:id',
      name: 'MoviePage',
      component: MoviePage,
    },
  ],
});