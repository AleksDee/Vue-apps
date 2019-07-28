<template>
  <div>
    Home component
    <button @click="confirmed=true">Confirm</button>
  </div>
  
</template>

<script>
export default {
 data() {
    return {
      confirmed: false
    }
  },
  beforeRouteLeave(to, from, next) {
    if(this.confirmed) {
      next();
    } else {
      if(confirm('Are you sure?')) {
        next()
      } else {
        next(false);
      }
    }
  }
}
</script>

<style lang="scss">

</style>
