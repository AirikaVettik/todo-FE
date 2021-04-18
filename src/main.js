import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import moment from "moment";
Vue.prototype.moment = moment;

Vue.filter('capitalize', function (value) {
  return value[0].toUpperCase() + value.slice(1).toLowerCase()
});

new Vue({
  render: h => h(App)
}).$mount("#app");
