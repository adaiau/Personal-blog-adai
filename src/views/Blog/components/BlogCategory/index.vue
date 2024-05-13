<template>
  <div v-loading="isLoading" class="blog-category-container">
    <h2>文章分类</h2>
    <right-list :list="list" @selected="handleClick" />
  </div>
</template>

<script>
import RightList from "../RightList";
import fetchDatas from "@/mixins/fetchData";
import { getBlogCategoris } from "@/api/blog.js";
export default {
  mixins: [fetchDatas([])],
  components: {
    RightList,
  },

  data() {
    return {
      isLoading: true,
    };
  },

  computed: {
    categoryId() {
      return this.$route.params.categoryId || -1;
    },
    limit() {
      return this.$route.query.limit || 10;
    },

    list() {
      const totalAticleCount = this.datas.reduce(
        (a, b) => a + b.articleCount,
        0
      );
      const listData = [
        { name: "全部", id: -1, articleCount: totalAticleCount },
        ...this.datas,
      ];
      return listData.map((it) => ({
        ...it,
        isSelected: it.id === this.categoryId,
        aside: `${it.articleCount}篇`,
      }));
    },
  },

  methods: {
    async fetchData() {
      const data = await getBlogCategoris();
      return data;
    },
    handleClick(item) {
      const query = { page: 1, limit: this.limit };
      if (item.categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
