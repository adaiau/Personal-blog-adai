<template>
  <div class="text-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
export default {
  components: {
    Contact,
  },
};
</script>

<style>
.text-container {
  width: 400px;
  height: 300px;
  margin: 30px auto;
  border: 2px solid;
  background: #000;
  padding-top: 200px;
}
</style>
