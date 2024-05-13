<template>
  <Layout>
    <template>
      <BlogList />
    </template>
    <template #right>
      <div style="position: relative" class="test"><BlogCategory /></div>
    </template>
  </Layout>
</template>

<script>
import BlogList from "./components/BlogList";
import BlogCategory from "./components/BlogCategory";
export default {
  components: {
    Layout: () => import("@/components/Layout"),
    BlogList,
    BlogCategory,
  },
};
</script>

<style scoped lang="less">
.test {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
