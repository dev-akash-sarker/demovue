import * as Vue from "vue/dist/vue.esm-bundler.js";

const Hello = {
  props: ["greeting"],
  template: `
  <p>Hello i am goku and {{greeting}}</p>
  `,
};

const Num = {
  props: ["number"],
  template: `
   <div v-bind:class="getClass(number)">
    {{number}}
   </div>
  `,
  methods: {
    getClass(num) {
      return this.isEven(num) ? "blue" : "red";
    },
    isEven(val) {
      return val % 2 === 0;
    },
  },
};
const app = Vue.createApp({
  // template is a HTML part of our Vue application
  components: {
    Hello,
    Num,
  },
  template: `
  <div>

      <div >
        <div>
          <num v-for="number in numbers" v-bind:number="number"/>
        </div>
      </div>
      
  </div>
  `,
  data() {
    return {
      msg: "World",
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      value: ["a"],
    };
  },
  // computed, if the value has changed before executing
  computed: {
    evenList() {
      return this.numbers.filter((num) => this.isEven(num));
    },
    error() {
      if (this.value.length < 5) {
        return "Must be greater than 5";
      }
    },
  },
  methods: {
    // input(event) {
    //   this.value = event.target.value;
    // },

    increement() {
      this.count += 1;
    },
    decreement() {
      this.count == 0 ? (this.count = 0) : (this.count -= 1);
    },
  },
});
app.mount("#app");
