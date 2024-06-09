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
   <button 
    v-bind:class="getClass(number)"
    v-on:click="click"
    >
    {{number}}
   </button>
  `,
  methods: {
    click() {
      this.$emit("chosen", this.number);
      console.log(this.number);
    },
    getClass(num) {
      return this.isEven(num) ? "blue box" : "red box";
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
     <div >
        <div>
          <num
           v-for="number in numbers" 
           v-bind:number="number"
           v-on:chosen="addNumber"
           />
        <hr/>
          <num
           v-for="number in numberHistory" 
           v-bind:number="number"
           />
        </div>
      </div>
  `,
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      numberHistory: [],
    };
  },
  // computed, if the value has changed before executing
  computed: {
    evenList() {
      return this.numbers.filter((num) => this.isEven(num));
    },
  },
  methods: {
    addNumber(number) {
      this.numberHistory.push(number);
    },
  },
});
app.mount("#app");
