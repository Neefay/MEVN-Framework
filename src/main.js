import Vue from 'vue';
import './App/Plugins/vuetify'
import App from './App';
import router from './App/Routes';
import store from './App/Store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
