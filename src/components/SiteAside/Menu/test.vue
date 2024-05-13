<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
export default {
  components: {
    Menu,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 400px;
  height: 280px;
  margin: 30px auto;
  border: 2px solid;
  margin-top: 200px;
  background: #000;
}
</style>
