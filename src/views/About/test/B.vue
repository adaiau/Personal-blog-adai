<template>
  <div>
    <h1>组件B {{ number.a }}</h1>
    <button @click="number.a--">-</button>
  </div>
</template>

<script>
import store from "./store";
export default {
  data() {
    return {
      number: store.number,
    };
  },
  methods: {
    handle() {
      console.log(number);
    },
  },
};
</script>

<style lang="scss" scoped></style>
