<template>
  <div id="welcome">
    <h1>{{ 'Time to learn something new!' | reverse }}</h1>
    <p>{{ 'Text' | calculateLength }}</p>
    <p>Текст с миксина: {{lengthAware}}</p>
    <p>Своя директива: </p>
    <button v-customOn="clicked"></button>
    <div v-myDirective:mouseenter="mouseOn" v-myDirective:mouseleave="mouseOut" style="width: 100px; height: 100px; background-color: lightgreen;"></div>
    <p>You found the best place to learn - and now you're just one sign in (or sign up) away from it!</p>
    <div class="cta">
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/signin">Sign In</router-link>
    </div>
  </div>
</template>

<script>
  import { lengthAwareMixin } from '../../lengthMixin';

  export default {
    mixins: [lengthAwareMixin],
    directives: {
      customOn: {
        bind(el, binding) {
          // el.onclick = function() {
          //   binding.value();
          // }
          const type = binding.arg;
          const fn = binding.value;

          el.addEventListener(type, fn);
        }
      },
      myDirective: {
        bind(el, binding) {
          el.addEventListener(binding.arg, binding.value);
        }
      }
    },
    data() {
      return {
        secondText: 'Maximilian'
      }
    },

    filters: {
      reverse(value) {
        debugger
        return value.split(" ").reverse().join("");
      }
    },

    methods: {
      clicked() {
        alert('Алерт!!!');
      },
      mouseOn() {
        alert('Навели мышку!!!');
      },
      mouseOut() {
        alert('Увели мыщку...');
      }
    }
  }
</script>

<style scoped>
  #welcome {
    width: 80%;
    margin: auto;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  .cta {
    width: 300px;
    margin: auto;
    text-align: center;
  }

  .cta a {
    margin: 10px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid #521751;
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    box-sizing: border-box;
    color: #521751;
  }

  .cta a:hover,
  .cta a:active {
    background-color: #521751;
    color: white;
  }
</style>