<template>
  <div class="text-container">
    <Empty :size="50" :textSize="16" />
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script>

<style>
.text-container {
  position: relative;
  width: 620px;
  height: 500px;
  border: 2px solid;
  margin: 30px auto;
}
</style>
