<template>
  <div>
    <!-- <app-header></app-header> -->
    <!-- <router-view name="header-top"></router-view>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="header-bottom"></router-view> -->
    <!-- <app-result></app-result>
    <app-another-result></app-another-result>
    <hr>
    <app-counter></app-counter> -->
    <div>
      <label for="">Username</label>
      <input type="text" v-model="user.username">
    </div>
    <br>
    <div>
      <label for="">Mail</label>
      <input type="text" v-model="user.email">
    </div>

    <br>
    
    <ul>
      <li v-for="u in users" :key="u.id">
        {{u.username}} - {{u.email}}
      </li>
    </ul>

    <button type="submit" @click="submit">Submit</button>

    <br>

    <button @click="fetchData">Get Data</button>
  </div>
</template>

<script>
// import Header from '../components/Header.vue';
// import Counter from '../components/Counter.vue';
// import Result from '../components/Result.vue';
// import AnotherResult from '../components/AnotherResult.vue';

export default {
  data() {
    return {
      user: {
        username: '',
        email: ''
      },

      users: [],

      resource: {}
    }
  },

  methods: {
    created() {
      const customActions = {
        saveAlt: {method: 'POST', url: 'alternative.json'}
      }
      this.resource = this.$resource('data.json', {}, customActions);
    },

    submit() {
      // this.$http.post('https://test-988c3.firebaseio.com/data.json', this.user)
      //   .then(response => {
      //     console.log(response);
      //   } ,error => {
      //     console.log(error);
      //   });
      // this.resource.save({}, this.user);
      this.resource.saveAlt(this.user);
    },

    fetchData() {
      // this.$http.get('https://test-988c3.firebaseio.com/data.json')
      this.$http.get('')
        .then(response => {
          debugger;
          const data = response.json();
          return data
          .then(data => {
            console.log(data);
            const result = [];
            for (let key in data) {
              result.push(data[key]);
            }
            this.users = result;
            });
          // console.log(data);
          // return response.json();
        })
        // .then(data => console.log(data));
        // .then(data => );
    }
  },
  components: {
    // 'app-header': Header
    // 'app-counter': Counter,
    // 'app-result': Result,
    // 'app-another-result': AnotherResult
  }
}
</script>

<style lang="scss">

</style>
