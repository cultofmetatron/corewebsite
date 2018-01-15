import Vue from 'vue';
import Router from 'vue-router';
import AboutMe from '@/components/AboutMe';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AboutMe',
      component: AboutMe
    }
  ]
});
