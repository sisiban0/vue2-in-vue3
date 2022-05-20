<template>
  <div>
    <h3>Vue2 App</h3>
    <div style="color: red">
      <div>count: {{ count }}</div>
    </div>
    <Button @btnClick="inc" :count="count" />
    <router-view></router-view>
  </div>
</template>

<script>
import Button from './components/Button';

export default {
  components: {
    Button,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    inc() {
      this.count++;
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
