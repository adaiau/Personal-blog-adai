<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      :isMore="isMore"
      title="留言板"
      :subTitle="`(${datas.total})`"
      :isListLoading="isLoading"
      :list="rows"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import { getMessage, postMessage } from "@/api/message.js";
import { comment, fetchData, mainScroll } from "@/mixins";
export default {
  data() {
    return {
      content: "成功！感谢您的留言！",
    };
  },
  components: {
    MessageArea,
  },
  mixins: [
    fetchData({ total: 0, rows: [] }),
    mainScroll("messageContainer"),
    comment(getMessage, postMessage),
  ],
};
</script>

<style scoped>
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.message-area-container {
  width: 700px;
  margin: 0 auto;
}
</style>
