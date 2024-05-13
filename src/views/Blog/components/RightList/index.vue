<template>
  <div class="right-list-container">
    <ul>
      <li v-for="(item, i) in list" :key="i">
        <span @click="handleClick(item)" :class="{ active: item.isSelected }">{{
          item.name
        }}</span>
        <span
          @click="handleClick(item)"
          :class="{ active: item.isSelected }"
          class="aside"
          v-if="item.aside"
          >{{ item.aside }}</span
        >
        <!-- 递归抛出事件 -->
        <right-list :list="item.children" @selected="handleClick" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RightList",
  props: {
    //  [{ name: xxx , isSelected: true , children:[{name:xxx}], @clickChange  }]
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      // 抛出事件 事件名  点击后抛出对象item
      if (!item.selected) {
        this.$emit("selected", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colorVar.less";
.right-list-container {
  margin: 0;
  box-sizing: border-box;
  width: 100%;

  ul {
    list-style: none;
    padding: 0;
    li {
      min-height: 40px;
      line-height: 40px;
      font-size: 14px;
      cursor: pointer;
      .aside {
        margin-left: 14px;
        font-size: 12px;
        color: @gray;
      }

      .active {
        color: @warn;
        font-weight: bold;
      }

      .right-list-container {
        margin-left: 14px;
      }
    }
  }
}
</style>
