import * as Vue from "vue/dist/vue.esm-bundler.js";
const app = Vue.createApp({
  // template is a HTML part of our Vue application
  template: `
  <h1>Hello World</h1>
  <div> Hello {{counter}}</div>
  `,
  data() {
    return {
      msg: "World",
    };
  },
});
app.mount("#app");
