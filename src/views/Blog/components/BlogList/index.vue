<template>
  <div v-loading="isLoading" class="blog-list-container" ref="mainContainer">
    <ul>
      <li v-for="item in datas.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink
            :to="{
              name: `Detail`,
              params: {
                id: item.id,
              },
            }"
          >
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink
            :to="{
              name: `Detail`,
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: `CategoryBlog`,
                params: {
                  categoryId: item.category.id,
                },
              }"
              class=""
              >分类{{ item.category.id }}</RouterLink
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <Empty v-if="datas.rows.length === 0 && !isLoading" />
    <Pager
      v-if="datas.total"
      :current="routeInfo.page"
      :total="datas.total"
      :limit="routeInfo.limit"
      :visibaleNumber="10"
      @changePage="handleChangePage"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import Empty from "@/components/Empty";
import fetchDatas from "@/mixins/fetchData.js";
import mainScroll from "@/mixins/mainScroll.js";
import { getBlogs } from "@/api/blog";
import { formatDate } from "@/utils";
export default {
  mixins: [fetchDatas({ total: 0, rows: [] }), mainScroll("mainContainer")],

  created() {},
  components: {
    Pager,
    Empty,
  },
  data() {
    return {};
  },

  methods: {
    formatDate,
    // 获取远程数据
    async fetchData() {
      const data = await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
      return data;
    },

    handleChangePage(newPage) {
      // 改变路由 跳转到newPage页  其他不变
      // 如果 category = -1 没有值 则跳转为下面格式
      //   /artical/cate?&page=${newPage}&limit=${this.$route.query.limit}
      const query = { page: newPage, limit: this.routeInfo.limit };
      if (this.routeInfo.categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      }
      // 如果 category  则跳转为下面格式
      //  `/artical/cate/${this.$route.params.categoryId}?&page=${newPage}&limit=${this.$route.query.limit}`;
      else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },

  computed: {
    // 获取路由信息
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        page,
        limit,
        categoryId,
      };
    },
  },

  watch: {
    $route: {
      async handler() {
        this.isLoading = true;
        // 滚从高度设为 0
        this.$refs.mainContainer.scrollTop = 0;
        // 重新获取远程数据
        this.datas = await this.fetchData();

        this.isLoading = false;
      },
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/colorVar.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
