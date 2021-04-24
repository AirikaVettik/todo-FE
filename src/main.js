import Vue from "vue";
import VueRouter from 'vue-router';
import routes from './routes';
import Master from "./components/layout/Master.vue"

Vue.config.productionTip = false;
Vue.use(VueRouter)

import moment from "moment";
Vue.prototype.moment = moment;

Vue.filter('capitalize', function (value) {
  return value[0].toUpperCase() + value.slice(1).toLowerCase()
});

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  components: { Master },
  template: '<Master/>'
})
