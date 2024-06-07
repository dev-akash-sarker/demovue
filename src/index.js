import * as Vue from "vue/dist/vue.esm-bundler.js";
const app = Vue.createApp({
  template: `<button v-on:click="increment()">Increement</button>
  <button v-on:click="decrement">Decrement</button>
  <p>{{count}}</p>
  <input 
  v-bind:value="value" 
  v-on:input="input"
  />
  <br>
  {{value}}
  <br>
<div class="red">
{{error}}
</div>
  <div v-for="number in numbers">
  <div>
    {{number}}
  </div>

  </div>

  `,
  data() {
    return {
      count: 0,
      value: "user",
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },

  computed: {
    evenList() {
      return this.numbers.filter((num) => this.even(num));
    },
    error() {
      if (this.value.length < 5) {
        return "Must be greater than 5";
      }
    },
  },
  methods: {
    input($event) {
      this.value = $event.target.value;
    },
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    },
    even(number) {
      return number % 2 === 0;
    },
  },
});
app.mount("#app");
