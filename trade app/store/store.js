import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // counter: 0,
        testCounter: 0,
        value: 0
    },

    getters: getters,
    
    // getters: {
    //     doubleCounter(state) {
    //         return state.counter * 2;
    //     },

    //     stringCounter(state) {
    //         return state.counter + ' clicks';
    //     },

    //     value(state) {
    //         return state.value;
    //     }
    // },
    // mutations: {
    //   incrementMutation(state, payload) {
    //     state.counter+= payload;
    //   },
    //   decrementMutation(state) {
    //     state.counter--;
    //   },

    //   changeValue(state, payload) {
    //       debugger
    //     state.value += payload;
    //   }
    // },
    // actions: {
    //     increment(context, payload) {
    //         context.commit('incrementMutation', payload);
    //     },
    //     decrement(context) {
    //         context.commit('decrementMutation');
    //     },
    //     // asynchronous(context) {
    //     //     setTimeout( () => {
    //     //         context.commit('incrementMutation');
    //     //     }, 5000)
    //     // }
    //     asynchronous({commit}, payload) {
    //         setTimeout( () => {
    //             commit('incrementMutation', payload.by);
    //         }, payload.duration)
    //     },

    //     changeValue({commit}, payload) {
    //         commit('changeValue', payload);
    //     }
    // },

    actions: actions,

    mutations: mutations,

    modules: {
        counter: counter
    }
});