import Vue from 'vue';
import router from './router';
import 'babel-polyfill';
import App from './App';
import {
  Vuetify,
  VApp
} from 'vuetify';
import { Ripple } from 'vuetify/es5/directives';
import { parallaxPoint } from './directives/index.js';
Vue.directive('parallax-point', parallaxPoint);

Vue.use(Vuetify, {
  components: {
    VApp
  },
  directives: {
    Ripple
  }
});

Vue.prototype.$EventBus = new Vue();
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
