<template>
  <div @click="handleClick" v-show="isShow" class="to-top-container">Top</div>
</template>

<script>
export default {
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },

  beforeDestroy() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  data() {
    return {
      isShow: false,
    };
  },

  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.isShow = false;
        return;
      }
      this.isShow = dom.scrollTop >= 1000;
    },
    handleClick() {
      this.$bus.$emit("scrollTop", 0);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colorVar.less";
.to-top-container {
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 50px;
  height: 50px;
  font-size: 16px;
  color: #fff;
  background: @primary;
  cursor: pointer;
  z-index: 99;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
}
</style>
