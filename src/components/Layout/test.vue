<template>
  <div class="test-container">
    <Layout>
      <template v-slot:left>
        <SiteAside />
      </template>
      <template>
        <div class="main"><h1>main 区域</h1></div>
      </template>
      <template v-slot:right>
        <div class="right"><h1>right区域</h1></div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
import SiteAside from "@/components/SiteAside";
export default {
  components: {
    Layout,
    SiteAside,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.test-container {
  .self-fill();
  & .main {
    background: whitesmoke;
    height: 100%;
  }
  & .right {
    width: 150px;
    height: 100%;
    background: #000;
  }
}
</style>
