<template>
  <div class="blog-comment-container">
    <MessageArea
      :isMore="isMore"
      title="评论列表"
      :subTitle="`(${datas.total})`"
      :isListLoading="isLoading"
      :list="rows"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import { getComments, postComment } from "@/api/blog";
import { comment, fetchData } from "@/mixins";
export default {
  mixins: [
    fetchData({ total: 0, rows: [] }),
    comment(getComments, postComment),
  ],
  data() {
    return {
      content: "评论成功！！",
    };
  },

  components: {
    MessageArea,
  },
};
</script>

<style lang="less" scoped>
.blog-commen-container {
  margin: 30px 0;
}
</style>
