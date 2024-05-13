<template>
  <div class="test-container">
    <right-list :list="list" @selected="handleSelected" />
  </div>
</template>

<script>
import RightList from "./index.vue";
export default {
  components: { RightList },
  data() {
    return {
      list: [
        { name: "概述", isSelected: false },
        {
          name: "简单请求",
          isSelected: true,
          children: [
            { name: "简单请求的判定", isSelected: false },
            {
              name: "简单请求的交互规范",
              isSelected: true,
              children: [
                { name: "b-2-1", isSelected: true },
                { name: "b-2-2", isSelected: false },
                { name: "b-2-3", isSelected: false },
              ],
            },
            { name: "b-3", isSelected: false },
          ],
        },
        { name: "需要预检的请求", isSelected: false },
        { name: "附带身份凭证的请求", isSelected: false },
      ],
    };
  },
  methods: {
    handleSelected(item) {
      console.log(item);
    },
  },
};
</script>

<style lang="less">
.test-container {
  width: 300px;
  height: 400px;
  margin: 100px auto;
  background: #000;
  color: #fff;
}
</style>
