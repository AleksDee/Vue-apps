<template>
  <div>UserEdit component
    <br>
    FIRST PARAM: {{ $route.query.a }}
    SECOND PARAM: {{ $route.query.b }}

    <br>

    <button @click="confirmed=true">Confirm</button>

    <!-- <div style="height: 700px;"></div>
    <p id="data">Data</p> -->
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