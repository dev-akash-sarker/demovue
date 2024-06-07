import * as Vue from "vue/dist/vue.esm-bundler.js";
const app = Vue.createApp({
  // template is a HTML part of our Vue application
  template: `
  <div>
    <button v-on:click="increement">increement</button>
    <button v-on:click="decreement">decreement</button>
    <div>{{count}}</div>
   <div v-for="number in numbers">
    <div>
     {{number}}
     <span v-if="isEven(number)">Even</span>
     <span v-else>Odd</span>
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
  methods: {
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
