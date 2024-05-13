<template>
  <div class="ImageLoader-container">
    <img v-if="!allLoaded" class="placeholder" :src="placeholder" alt="" />
    <img
      :src="src"
      alt=""
      @load="handleLoade"
      :style="{
        opacity: originOpacity,
        transition: `${duration}ms`,
      }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      IsLoaded: false, //原图是否加载完成
      allLoaded: false, //图片加载完成后
    };
  },
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
  methods: {
    handleLoade() {
      this.IsLoaded = true;
      // 原图加载完成后  为了避免出现衔接空挡  须setTimeout
      // this.allLoaded = true;
      setTimeout(() => {
        this.allLoaded = true;
        this.$emit("load");
      }, this.duration);
    },
  },
  computed: {
    originOpacity() {
      return this.IsLoaded ? 1 : 0;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.ImageLoader-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    .self-fill();
  }
}

.placeholder {
  opacity: 1;
  filter: blur(2vw);
}
</style>
