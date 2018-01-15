// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Buefy from 'buefy';
import 'vue-awesome/icons'; // TODO: pull individual icons to reduce file size
import Icon from 'vue-awesome/components/Icon';
import 'buefy/lib/buefy.css';

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.component('icon', Icon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
