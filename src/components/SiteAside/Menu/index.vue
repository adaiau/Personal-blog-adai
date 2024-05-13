<template>
  <nav class="menu-container">
    <RouterLink
      v-for="item in items"
      :key="item.name"
      :to="{ name: item.name }"
      :exact="item.exact"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.type" :size="16" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home", // 命名路由  减少链接与路由的耦合
          type: "home",
          title: "首页",
          exact: true,
        },
        {
          name: "Blog",
          type: "blog",
          title: "文章",
          exact: false, // 激活状态 模糊匹配状态
        },
        {
          name: "About",
          type: "about",
          title: "关于我",
          exact: true,
        },
        {
          name: "Project",
          type: "code",
          title: "项目 & 效果",
          exact: true,
        },
        {
          name: "Message",
          type: "chat",
          title: "留言板",
          exact: true,
        },
      ],
    };
  },

  // methods: {
  //   selected(item) {
  //     //   console.log(location.pathname.toLowerCase() === path.toLowerCase());
  //     // return location.pathname.toLowerCase() === path.toLowerCase();
  //     const link = item.link.toLowerCase(); // 菜单link地址
  //     var curPath = location.pathname.toLowerCase(); // 当前访问路径
  //     if (item.startWith) {
  //       // console.log(link, curPath.toString().startsWith(link));
  //       return curPath.toString().startsWith(link);
  //     } else {
  //       return link === curPath;
  //     }
  //   },
  // },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colorVar.less";
@import "~@/styles/global.less";
.menu-container {
  @itemHeight: 45px;
  margin: 24px 0;
  padding: 0;
  a {
    height: @itemHeight;
    padding: 0 50px;
    color: @gray;
    align-items: center;
    display: flex;
    cursor: pointer;
    &.selected {
      background: darken(@words, 3%);
    }
    &:hover {
      color: #fff;
    }
    .icon {
      width: 24px;
      height: 21px;
      line-height: 21px;
      font-size: 16px;
    }
  }
}
</style>
