import Vue from "vue";
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from "./App.vue";
import router from "./router";

Vue.use(VueAxios, axios)

// axios.defaults.headers = {
//   'Cache-Control': 'no-cache'
// };

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
