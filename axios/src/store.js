import Vue from 'vue'
import Vuex from 'vuex'

import axios from './axios-auth';
import globalAxios from 'axios';

import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser (state, payload) {
      state.idToken = payload.token;
      state.userId = payload.userId;
    },
    storeUser (state, payload) {
      state.user = payload;
    },
    clearAuthData (state) {
      state.idToken = null;
      state.userId = null;
    }
  },
  actions: {
    setLogoutTime ({commit}, payload) {
      setTimeout(() => {
        commit('clearAuthData');
      }, payload);
    },

    logout ({commit}) {
      commit('clearAuthData');
      localStorage.removeItem('expirationDate');
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      router.push('/signin');
    },

    signup ({commit, dispatch}, payload) {
      axios.post('/signupNewUser?key=AIzaSyDOEmY8glokKrcIPjjAFXyrFVOoc6ZqnTw', {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
      .then(res => {
        console.log(res);
        commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
        });
        const currentDate = new Date();
        const expirationDate = new Date(currentDate.getTime() + res.data.expiresIn * 1000);
        localStorage.setItem('token', res.data.idToken);
        localStorage.setItem('userId', res.data.localId);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch('setLogoutTime', 3600);
        dispatch('storeUser', {payload});
      })
      .catch(err => {console.log(err)});
    },

    login ({commit, dispatch}, payload) {
      axios.post('/verifyPassword?key=AIzaSyDOEmY8glokKrcIPjjAFXyrFVOoc6ZqnTw', {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
      .then(res => {
        console.log(res);
        const currentDate = new Date();
        const expirationDate = new Date(currentDate.getTime() + res.data.expiresIn * 1000);
        localStorage.setItem('token', res.data.idToken);
        localStorage.setItem('userId', res.data.localId);
        localStorage.setItem('expirationDate', expirationDate);
        commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
        });
        dispatch('setLogoutTime', 3600);
      })
      .catch(err => {console.log(err)});
    },

    tryAutoLogin ({commit}) {
      const token = localStorage.getItem('token');
      if (!token) return;

      const expirationDate = localStorage.getItem('expirationDate');
      const currentDate = new Date();
      if (currentDate <= expirationDate) {
        commit('authUser', {
          token: token,
          userId: userId
        });
      } else {
        return;
      }
      const userId = localStorage.getItem('userId');
    },

    storeUser ({commit, state}, payload) {
      if (!state.idToken) {
        return;
      }
      globalAxios.post('/users.json' + '?auth=' + state.idToken, payload)
      .then(res => console.log(res))
      .catch(error => console.log(error));
    },

    fetchUser ({commit, state}) {
      if (!state.idToken) {
        return;
      }
      globalAxios.get('/users.json' + '?auth=' + state.idToken)
      .then(res => {
        console.log(res);
        const data = res.data;
        const users = [];
        for (let key in data) {
          const user = data[key];
          user.id = key;
          users.push(user);
        }
        console.log(users);
        // this.email = users[0].email;
        commit('storeUser', users[0]);


        })
      .catch(err => {console.log(err)});
    }
  },
  getters: {
    user (state) {
      return state.user;
    },
    isAuthenticated (state) {
      return state.idToken !== null;
    }
  },
})