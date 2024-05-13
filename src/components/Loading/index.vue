<template>
  <div class="loading-container">
    <img class="loading-container" src="@/assets/loading.svg" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.loading-container {
  & img {
    .self-center();
  }
}
</style>
