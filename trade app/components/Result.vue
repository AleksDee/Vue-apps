<template>
  <div>
    <p>Тестовое значение: {{ testCounter }}</p>
    <!-- <p>Counter is: {{ counter }}</p> -->
    <p>Value: {{ this.$store.getters.value }}</p>

    <!-- <input type="text" v-model="currentValue"> -->
    <!-- <input type="text" :value="currentValue" @input="updateValue"> -->
    <!-- <input type="text" v-model="currentValue"> -->
  </div>
</template>

<script>
export default {
  // props: ['counter']
  computed: {
    // counter() {
    //   return this.$store.state[types.DOUBLE_COUNTER];
    // },
    currentValue() {
      return this.$store.getters.value;
    },

    testCounter() {
      return this.$store.getters.testCounter;
    }

  },

  methods: {
    // updateValue(e) {
    //   debugger
    //   this.$store.dispatch('changeValue', e.target.value);
    // }
    // updateValue: {
    //   get() {
    //    return this.$store.getters.value;
    //   },
    //   set(value) {
    //     this.$store.dispatch('changeValue', value);
    //   }
    // }
  }
}
</script>

<style lang="scss">

</style>