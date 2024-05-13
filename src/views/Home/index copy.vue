<template>
  <div class="home-container" ref="container" @wheel="handelWheel">
    <ul
      class="carousel-container"
      :style="{
        marginTop: marginTop,
      }"
      @transitionend="handelTransitionEnd"
    >
      <li v-for="item in items" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <div v-show="index > 0" class="icon icon-up" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < items.length - 1"
      class="icon icon-down"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in items"
        :class="{ active: index === i }"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
    <Loading v-if="isLoading" />
  </div>
</template>

<script>
import Loading from "@/components/Loading";
import { getBanners } from "@/api/banner";
import CarouselItem from "./CarouselItem.vue";
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
    CarouselItem,
    Loading,
  },
  data() {
    return {
      // items: [],
      index: 0, // 当前显示第几张轮播图
      containerHeight: 0, // 容器最大高度
      switching: false, // 是否在滚动中
      // isLoading: true, // 图片是否在加载中
    };
  },
  // 生命周期函数 创建vue实例后运行created
  // async created() {
  //   this.items = await getBanners();
  //   this.isLoading = false;
  // },
  // 生命周期函数 组件挂载后运行mounted
  mounted() {
    // 获取容器最大高度
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handelResize);
  },
  // 生命周期函数 组件摧毁运行destroyed
  destroyed() {
    window.removeEventListener("resize", this.handelResize);
  },

  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },

  methods: {
    switchTo(i) {
      this.index = i;
    },
    handelWheel(e) {
      if (this.switching) {
        return;
      }
      // console.log(e);
      // 向上滚动
      if (e.deltaY === 100 && this.index < this.items.length - 1) {
        this.switching = true; // 滚动开关打开 向下滚动中
        this.index++;
        console.log(this.index);
      }

      // 向下滚动
      else if (e.deltaY === -100 && this.index > 0) {
        this.switching = true; // 向上滚动中
        this.index--;
      }
      // console.log(this.index);
      // console.log(e.deltaY);
    },
    handelTransitionEnd() {
      // 滚动完成后  将开关打开  为下一次滚动做准备
      this.switching = false;
    },
    handelResize() {
      // 视口改变时 重新赋值容器高度
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/colorVar.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  // // test strat
  // width: 60%;
  // height: 50%;
  // margin: 200px auto;
  // border: 2px solid red;
  // // test end

  .carousel-container {
    transition: 0.5s;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    li {
      width: 100%;
      height: 100%;
    }
  }

  .icon {
    .self-center();
    font-size: 30px;
    cursor: pointer;
    color: @gray;
    @gap: 15px;
    transform: translateX(-50%);
    &.icon-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }

    @jump: 8px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }
      50% {
        transform: translate(-50%, -@jump);
      }
      100% {
        transform: translate(-50%, @jump);
      }
    }

    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }

  .indicator {
    .self-center();
    transform: translateY(-50%);
    left: auto;
    right: 20px;
    & li {
      cursor: pointer;
      margin-bottom: 5px;
      width: 7px;
      height: 7px;
      list-style: none;
      background: @words;
      border: 1px solid #fff;
      border-radius: 50%;
      box-sizing: border-box;
      margin-bottom: 10px;
    }
    & .active {
      background: #fff;
    }
  }
}
</style>
