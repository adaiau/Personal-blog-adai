<template>
  <div>
    <h1>About</h1>
    number:<input v-model="number.a"></input>
    <button @click="number.a++">+</button>
    <A />
    <B />
  </div>
</template>

<script>
import A from "./A";
import B from "./B";
import store from "./store.js";
export default {
  components: {
    A,
    B,
  },
  data() {
    return {
      number: store.number,
    };
  },
};
</script>

<style></style>
