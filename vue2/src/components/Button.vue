<template>
  <el-button @click="click">vue2 button click</el-button>
</template>

<script>
export default {
  props: ['count'],
  methods: {
    click() {
      this.$emit('btnClick');
      // vue3 events needs the Camel-Case start with "on"
      this.$emit('onBtnClick');
    },
  },
};
</script>

