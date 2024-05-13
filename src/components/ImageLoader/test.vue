<template>
  <div class="text-container">
    <ImageLoader
      @load="handleLoade"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoade() {
      console.log("图片加载完成");
    },
  },
};
</script>

<style scoped>
.text-container {
  width: 600px;
  height: 500px;
  border: 2px solid;
  margin: 30px auto;
}
</style>
