<template>
  <div>
    <h3>Vue3 App</h3>
    <Content :count="count" />
    <!-- <button @click.native="inc">刷新</button> -->
    <div id="vue2Button"></div>
    <vue2-button ref="root" :key="count" />
  </div>
</template>

<script>
import { ref} from "vue";
import Content from "./components/Content";
// import {Vue2InVue3,store} from "./vue2"
import { Vue2InVue3,store } from "./utils";
import Button from 'vue2App/Button';

export default {
  components: {
    Content,
    vue2Button: Vue2InVue3(Button, 'vue2Button',{store}),
  },
  setup() {
    const count = ref(0);
    const root = ref(null);
    const inc = () => {
      count.value++;
      root.value.update();
    };
    return {
      count,
      inc,
      root,
    };
  },
};
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
