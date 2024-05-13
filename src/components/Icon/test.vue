<template>
  <div class="text-container">
    <div class="item" v-for="t in types" :key="t">
      <Icon :type="t" />
      <label>{{ t }}</label>
    </div>
  </div>
</template>

<script>
import Icon, { types } from "./";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      types,
    };
  },
};
</script>

<style scoped>
.text-container {
  display: flex;
  width: 600px;
  justify-content: center;
  margin: 30px auto;
  flex-wrap: wrap;
  background: whitesmoke;
}
.item {
  margin: 20px;
  text-align: center;
}
.icon-container {
  display: block;
}
</style>
