import * as types from '../types';

const state = {
    counter: 0
};

const getters = {
    doubleCounter(state) {
        return state.counter * 2;
    },

    stringCounter(state) {
        return state.counter + ' clicks';
    },

    value(state) {
        return state.value;
    }
};

 const mutations = {
    
    // decrementMutation(state) {
    //   state.counter--;
    // },

    changeValue(state, payload) {
        debugger
      state.value += payload;
    }
  };

   const actions = {
    //   decrement(context) {
    //       context.commit('decrementMutation');
    //   },
      // asynchronous(context) {
      //     setTimeout( () => {
      //         context.commit('incrementMutation');
      //     }, 5000)
      // }
      asynchronous({commit}, payload) {
          setTimeout( () => {
              commit('incrementMutation', payload.by);
          }, payload.duration)
      },

      changeValue({commit}, payload) {
          commit('changeValue', payload);
      }
  }

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
};