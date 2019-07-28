import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import Vuelidate from "vuelidate";

import router from "./router";
import store from "./store";

Vue.filter("calculateLength", value => {
  return value + "(" + value.length + ")";
});

Vue.use(Vuelidate);

axios.defaults.baseURL = "https://test-988c3.firebaseio.com";
// axios.defaults.headers.common['Authoriazation'] = 'fdfdsfsdf'
// axios.defaults.headers.get['Accepts'] = 'application/json'

// const reqInterceptor = axios.interceptors.request.use(req => {
//   console.log('Request Interceptor', req);
//   req.headers['SOMETHING'] = 'Just our heading'
//   return req;
// });
// const resInterceptor = axios.interceptors.response.use(res => {
//   console.log('Response Interceptor', res);
//   return res;
// });

// axios.interceptors.request.eject(reqInterceptor);
// axios.interceptors.request.eject(resInterceptor);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
