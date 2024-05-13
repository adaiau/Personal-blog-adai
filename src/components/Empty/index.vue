<template>
  <div class="empty-container">
    <Icon type="empty" :size="size" />
    <p :style="{ 'font-size': textSize + 'px' }">{{ text }}</p>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
    size: {
      type: Number,
      default: 150,
    },

    textSize: {
      type: Number,
      default: 24,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colorVar.less";
@import "~@/styles/mixin.less";
.empty-container {
  margin: 0;
  padding: 0;
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // // background: whitesmoke;
  // transform: translate(-50%, -50%);
  .self-center();
  text-align: center;
  color: @gray;
  font-size: 24px;
}
.icon-container {
  font-size: 150px;
}
</style>
