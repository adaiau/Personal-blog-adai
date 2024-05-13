<template>
  <div class="about-container" v-loading="loading && !srcLoaded">
    <iframe
      class="container"
      :src="src"
      frameborder="0"
      width="100%"
      height="100%"
      @loaded="srcLoaded = true"
    ></iframe>
  </div>
</template>

<script>
import fetchDatas from "@/mixins/fetchData";
import { getAbout } from "@/api/about";
import { mapState } from "vuex";
export default {
  mixins: [fetchDatas(null)],

  data() {
    return {
      srcLoaded: false,
    };
  },
  created() {
    this.$store.dispatch("about/getData");
  },
  methods: {
    async fetchData() {
      return await getAbout();
    },
  },

  computed: mapState("about", { src: "data", loading: "loading" }),
};
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.container {
  display: block;
}
</style>
