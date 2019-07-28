import Vue from 'vue';
// import VueRouter from 'vue-router';
import App from './App.vue';
import VueResource from 'vue-resource';

// import {routes} from './routes';
// import {store} from '../store/store';

// Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.http.options.root = 'https://test-988c3.firebaseio.com/data.json';
Vue.http.options.root = 'https://test-988c3.firebaseio.com/';
// Vue.http.interceptors.push((request, next) => {
//   debugger;
//   if(request.method === 'POST') {
//     request.method = 'PUT';
//   }

//   next(response => {
//     debugger
//     response.json = () => {return {messages: response.body}}
//   });

// });
// const router = new VueRouter({
//   routes: routes,
//   mode: 'history',
//   scrollBehavior(to, from, savedPosition) {
//     // if (savedPosition) {
//     //   return savedPosition;
//     // }

//     if (to.hash) {
//       return {
//         selector: to.hash
//       }
//     }
//     return {x: 0, y: 0};
//   }
// });

// router.beforeEach((to, from, next) => {
//   console.log('Global beforeEach');
//   next();
// });

new Vue({
  el: '#app',
  // router,
  // store,
  render: h => h(App)
})
