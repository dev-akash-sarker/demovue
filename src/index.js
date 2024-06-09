import * as Vue from "vue/dist/vue.esm-bundler.js";
const app = Vue.createApp({
  // template is a HTML part of our Vue application
  template: `
  <div>
    <button v-on:click="increement">increement</button>
    <button v-on:click="decreement">decreement</button>
    <div>{{count}}</div>
   <div v-for="number in evenList">
    <div>
     {{number}}
     <span v-if="isEven(number)">Even</span>
     <span v-else>Odd</span>
    </div>
   </div>
   <div>
    <h3>All numbers</h3>
    <div v-for="number in numbers" v-bind:class="getClass(number)">
      <div>
      {{number}}
      </div>
    </div>
   </div>
  </div>

  `,
  data() {
    return {
      msg: "World",
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  // computed, if the value has changed before executing
  computed: {
    evenList() {
      return this.numbers.filter((num) => this.isEven(num));
    },
  },
  methods: {
    getClass(num) {
      return this.isEven(num) ? "blue" : "red";
    },
    increement() {
      this.count += 1;
    },
    decreement() {
      this.count == 0 ? (this.count = 0) : (this.count -= 1);
    },
    isEven(val) {
      return val % 2 === 0;
    },
  },
});
app.mount("#app");
