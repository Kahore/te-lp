import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dialogList',
      component: Home,
      children: [
        {
        path: '/:dialogId',
        name: 'selectedDialog',
        component: () => import('./views/SelectedDialog.vue'),
        },
      ],
    },
  ],
});
