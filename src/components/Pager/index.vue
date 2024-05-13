<template>
  <!-- 只有总页数大于 1 时才显示该组件 -->
  <div class="pager-container" v-if="totalPage > 1">
    <!-- <h1>{{ visiableMin }}</h1> -->
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }">&lt;&lt;</a>
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      @click="handleClick(n)"
      :class="{ active: current === n }"
      v-for="(n, i) in numbers"
      :key="i"
      >{{ n }}</a
    >
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === totalPage }"
      >&gt;&gt;</a
    >
    <a
      @click="handleClick(totalPage)"
      :class="{ disabled: current === totalPage }"
      >&gt;&gt;</a
    >
    <!-- <h1>{{ visiableMax }}</h1> -->
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibaleNumber: {
      type: Number,
      default: 9,
    },
  },
  computed: {
    // 计算总页数
    totalPage() {
      // 向上取整
      return Math.ceil(this.total / this.limit);
    },
    // 当前显示最小页数
    visiableMin() {
      // 向下取整
      let minNumber = this.current - Math.floor(this.visibaleNumber / 2);
      if (minNumber < 1) {
        minNumber = 1;
      }
      return minNumber;
    },
    // 当前显示最大页数
    visiableMax() {
      let maxNumber = this.visiableMin + this.visibaleNumber - 1;
      if (maxNumber > this.totalPage) {
        maxNumber = this.totalPage;
      }
      return maxNumber;
    },
    // 页面数组
    numbers() {
      const numbers = [];
      for (let i = this.visiableMin; i <= this.visiableMax; i++) {
        numbers.push(i);
      }
      return numbers;

      // return [1, 2, 3, 4, 5, 6, 7, 8, 9];
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.totalPage) {
        newPage = this.totalPage;
      }
      if (newPage === this.current) {
        return;
      }
      this.$emit("changePage", newPage);
      // console.log(newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colorVar.less";

.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    cursor: pointer;
    color: @primary;
    margin: 0 10px;
    &:hover {
      color: inherit;
    }
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
    }
  }
}
</style>
