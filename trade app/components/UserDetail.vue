<template>
  <div>UserDetail component
    <br>
    {{this.$route.params.id}}
    <br>
    <!-- <router-link tag="button" :to="'/user/' + $route.params.id + '/edit'">Edit</router-link> -->
    <router-link tag="button" :to="link">Edit</router-link>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: 'userEdit' ,
        params: { id: this.$route.params.id },
        query: { a: '10', b: '15' },
        hash: '#data'
      }
    }
  },

  beforeRouteEnter(to, from, next) {
    if(false) {
      next();
    } else {
      next(false);
    }
  }
}
</script>

<style lang="scss">

</style>