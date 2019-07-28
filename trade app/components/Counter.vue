<template>
  <div>
    <!-- <button @click="asynchronous({by: 10, duration: 10000})">Increment</button> -->
    <!-- <button @click="increment(15)">Increment</button> -->
    <button @click="testChange(15)">Increment</button>
    <button @click="decrement(30)">Decrement</button>
    {{testGetters}}}
    {{myMethod()}}
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
import {mapActions} from 'vuex';
// import {mapGetters} from 'vuex';

export default {
  methods: {
    ...mapActions([
    'increment',
    'decrement',
    'asynchronous',
    'changeValue',
    'testChange'
  ]),
    myMethod() {
      return 6;
    },

    
    // increment(by){
    //   this.$store.dispatch('increment', by);
    // }
  },

  computed: {
    testGetters() {
      return this.$store.getters.doubleCounter;
    }
  }

//  methods: {
//    increment() {
//      this.$store.commit('incrementMutation');
//    },
//    decrement() {
//      this.$store.commit('decrementMutation');
//    },
//  }
}
</script>

<style lang="scss">

</style>