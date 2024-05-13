<template>
  <div class="image-loader-container">
    <img class="placeholder" :src="placeholder" alt="" />
    <img @load="handelLoaded" class="origin" :src="src" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.image-loader-container {
  position: relative;
  width: 100%;
  height: 100%;
  img {
    .self-fill();
  }
  .origin {
    // 透明度来切换图片
    opacity: 0;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>
