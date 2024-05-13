<template>
  <div id="app" class="app-container">
    <Layout>
      <template #left>
        <div class="left"><SiteAside /></div>
      </template>
      <template>
        <RouterView />
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from "./components/ToTop";

export default {
  name: "App",
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>

<style lang="less" scoped>
@import "./styles/mixin.less";
.app-container {
  .self-fill(fixed);
  & .left {
    height: 100%;
    width: 250px;
  }
}
</style>
