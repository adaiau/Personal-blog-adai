<template>
  <Layout>
    <template>
      <div ref="mainContainer" class="main-container" v-loading="isLoading">
        <BlogDetail :blog="datas" v-if="datas" />
        <BlogComment v-if="!isLoading" />
      </div>
    </template>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :list="datas.toc" v-if="datas.toc" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchDatas from "@/mixins/fetchData.js";
import mainScroll from "@/mixins/mainScroll.js";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "../components/BlogDetail";
import BlogTOC from "../components/BlogTOC";
import BlogComment from "../components/BlogComment";
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
import { titleController } from "../../../utils";

export default {
  mixins: [fetchDatas({}), mainScroll("mainContainer")],

  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },

  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },

  methods: {
    async fetchData() {
      let data = await getBlog(this.$route.id);
      // data = null;
      if (!data) {
        // 文章不存在
        this.$router.push("/404");
        return;
      }
      titleController.setRouterTitle(data.title);
      return data;
    },
  },
};
</script>

<style lang="less" scoped>
.main-container {
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
}
.right-container {
  position: relative;
  box-sizing: border-box;
  overflow-y: auto;
  width: 300px;
  height: 100%;
  padding: 20px;
}
</style>
