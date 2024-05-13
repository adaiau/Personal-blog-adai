<template>
  <div class="test-container">
    <loading />
  </div>
</template>

<script>
import Loading from "./index";
export default {
  components: { Loading },
};
</script>

<style lang="less">
.test-container {
  position: relative;
  background: #000;
  width: 400px;
  height: 400px;
  margin: 200px auto;
}
</style>
