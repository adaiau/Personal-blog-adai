<template>
  <div class="home-container">
    <h1>Home</h1>
    <div v-for="item in items" :key="item.id">
      <img :src="item.midImg" alt="" />
      <h1>{{ item.title }}</h1>
      <h2>{{ item.description }}</h2>
    </div>
  </div>
</template>

<script>
import { getBanners } from "@/api/banner";
export default {
  data() {
    return {
      items: [],
    };
  },
  async created() {
    console.log("created");
    this.items = await getBanners();
    console.log(this.items);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
</style>
