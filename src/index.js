import * as Vue from "vue/dist/vue.esm-bundler.js";
const app = Vue.createApp({
  // template is a HTML part of our Vue application
  template: `
  <div>
    <button v-on:click="increement">increement</button>
    <button v-on:click="decreement">decreement</button>
    <div>{{count}}</div>
    <div v-if="isEven(count)">Even</div>
    <div v-else>Odd</div>
  </div>

  `,
  data() {
    return {
      msg: "World",
      count: 0,
    };
  },
  methods: {
    increement() {
      this.count += 1;
    },
    decreement() {
      this.count == 0 ? (this.count = 0) : (this.count -= 1);
    },
    isEven() {
      return this.count % 2 === 0;
    },
  },
});
app.mount("#app");
