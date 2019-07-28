<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Counter is: {{ stringCounter }}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import * as types from '../store/types';

export default {

  computed: {
  //   ...mapGetters([
  //   'doubleCounter',
  //   'stringCounter'
  // ]),
  ...mapGetters({
      // doubleCounter: types.DOUBLE_COUNTER,
    // 'stringCounter'
  }),

    onemoreCounter() {
      console.log('!!!!');
    }
  }
}
  // computed: mapGetters([
  //   'doubleCounter',
  //   'stringCounter'
  // ])
  // }
  // props: ['counter']
  // computed: {
  //   counter1() {
  //     return this.$store.getters.doubleCounter;
  //   },

  //   counter2() {
  //     return this.$store.getters.stringCounter;
  //   }
  // }

</script>

<style lang="scss">

</style>