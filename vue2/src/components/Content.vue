<template>
  <div style="color: red;">
    {{ title }}
    <div>count: {{ count }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['count'],
  data() {
    return {
      title: "Component in Action..",
    };
  },
};
</script>
