<template>
  <div class="message-area-container">
    <DataForm v-on="$listeners" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading">
      <Empty
        v-if="!this.isMore"
        text="没有更多评论啦 . . ."
        :size="40"
        :textSize="16"
      />
    </div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";
import Empty from "@/components/Empty";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
    isMore: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    DataForm,
    DataList,
    Empty,
  },
};
</script>

<style scoped lang="less">
.loading {
  position: relative;
  box-sizing: border-box;
  height: 100px;
  margin: 10px 0;
}
</style>
