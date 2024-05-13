<template>
  <div class="blog-TOC-container" @scroll="setSelected">
    <h2>目录</h2>
    <RIghtList :list="toc" @selected="handleSelected" />
  </div>
</template>

<script>
import RIghtList from "../RightList";
import { debounce } from "@/utils";
export default {
  created() {
    // window.setSelected = this.setSelected;
  },

  mounted() {
    this.selectedDebounce = debounce(this.setSelected, 100);
    this.$bus.$on("mainScroll", this.selectedDebounce);
  },

  destroyed() {
    this.$bus.$off("mainScroll", this.selectedDebounce);
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  components: {
    RIghtList,
  },

  data() {
    return {
      // curAnchor: this.$route.hash,
      curAnchor: "123",
    };
  },

  computed: {
    // 将isSelected属性加进去
    toc() {
      /** 第一种方法 */
      // return this.list.map((it) => {
      //   if (it.children) {
      //     it.isSelected = "#" + it.anchor === this.curAnchor;
      //     it.children = it.children.map((child) => {
      //       return {
      //         ...child,
      //         isSelected: "#" + child.anchor === this.curAnchor,
      //       };
      //     });
      //   }
      //   it.isSelected = "#" + it.anchor === this.curAnchor;
      //   return it;
      // });

      /** 第二种方法 递归 */
      const getToc = (toc = []) => {
        const it = toc.map((it) => {
          return {
            ...it,
            isSelected: it.anchor === this.curAnchor,
            children: it.children ? getToc(it.children) : [],
          };
        });
        return it;
      };
      return getToc(this.list);
    },

    // 根据toc 得到菜单栏对应的dom元素
    doms() {
      const doms = [];
      const addDoms = (toc) => {
        for (const it of toc) {
          doms.push(document.getElementById(it.anchor));
          if (it.children && it.children.length) {
            addDoms(it.children);
          }
        }
      };
      addDoms(this.list);
      return doms;
    },
  },

  methods: {
    handleSelected(item) {
      location.hash = "#" + item.anchor;
    },

    // 滚轮滑动 控制设置激活样式
    setSelected(scrollDom) {
      if (!scrollDom) {
        // 如果滚动的dom元素不存在了 则不做处理了
        return;
      }
      this.curAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          this.curAnchor = dom.id;
          // location.hash = dom.id;
          return;
        }
        if (top > range) {
          return;
        } else {
          this.curAnchor = dom.id;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colorVar.less";
.blog-TOC-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
