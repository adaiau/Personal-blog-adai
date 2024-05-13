<template>
  <div>
    <Pager
      :total="total"
      :current="current"
      @changePage="handleChangePage($event)"
    />
  </div>
</template>

<script>
import Pager from "./";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      total: 311,
      current: 1,
    };
  },
  methods: {
    handleChangePage(newPage) {
      // console.log("页面更新了！！", newPage);
      this.current = newPage;
    },
  },
};
</script>

<style></style>
