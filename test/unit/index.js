import Vue from 'vue';
import Router from 'vue-router';
import {
  Vuetify,
  VApp,
  VGrid,
  VSelect,
  VTextField,
  VDialog,
  VDatePicker,
  VIcon,
  VBtnToggle,
  VBtn,
  VToolbar,
  VList,
  VForm,
  VNavigationDrawer
} from 'vuetify';
import { Ripple } from 'vuetify/es5/directives';

Vue.use(Router);
Vue.use(Vuetify, {
  components: {
    VApp,
    VGrid,
    VSelect,
    VTextField,
    VDialog,
    VDatePicker,
    VIcon,
    VBtnToggle,
    VBtn,
    VToolbar,
    VList,
    VForm,
    VNavigationDrawer
  },
  directives: {
    Ripple
  }
});

Vue.config.silent = true;
Vue.config.productionTip = false;
Vue.prototype.$EventBus = new Vue();

const app = document.createElement('div');
app.setAttribute('data-app', true);
document.body.append(app);

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/);
srcContext.keys().forEach(srcContext);
