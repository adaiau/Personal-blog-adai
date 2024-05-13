<template>
  <div class="SiteAside-container">
    <template v-if="data">
      <Avatar :url="data.avatar" />
      <h1 class="title">{{ data.name }}</h1>
    </template>
    <Menu />
    <Contact v-if="data" />
    <p class="footer" v-if="data">&copy;{{ data.icp }}</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },

  computed: mapState("setting", ["data"]),
};
</script>

<style lang="less" scoped>
@import "~@/styles/colorVar.less";
.SiteAside-container {
  padding: 20px 0;
  width: 100%;
  height: 100%;
  background: @dark;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  .avatar-container {
    margin: 0 auto;
  }
  .title {
    font-size: 1.2em;
    text-align: center;
    color: #fff;
  }
  .footer {
    font-size: 12px;
    color: @words;
    margin: 12px 0;
    text-align: center;
  }
}
</style>
