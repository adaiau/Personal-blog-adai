<template>
  <div class="test-container" ref="container">
    <h1>消息弹窗</h1>
    <button @click="handleClick">CLICK</button>
  </div>
</template>

<script>
import { showMessage } from "./index";
export default {
  methods: {
    handleClick() {
      showMessage({
        content: "发送成功！！",
        type: "success",
        duration: "",
        container: this.$refs.container,
        callback() {
          console.log(this.container);
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.test-container {
  .self-center();
  border: 1px solid;
  height: 400px;
  width: 600px;
  background: whitesmoke;
}
</style>
