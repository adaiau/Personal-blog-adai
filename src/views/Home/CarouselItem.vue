<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" ref="inner" :style="imgMove">
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        @load="showWords"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
    <!-- test -->
    <!-- <span>X:{{ mouseX }},Y:{{ mouseY }}</span> -->
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";

export default {
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0, // 文字的宽度
      descWidth: 0,
      mouseX: 0, // 鼠标横坐标
      mouseY: 0, // 鼠标纵坐标
      containerSize: null, // 容器的尺寸对象
      innerSize: null, // 内部图片寸对象

      // 图片初始位置
      // left: 0,
      // top: 0,
    };
  },
  props: {
    // title: {
    //   type: String,
    //   required: true,
    // },
    // description: {
    //   type: String,
    //   required: true,
    // },
    // url: {
    //   type: String,
    //   required: true,
    // },

    carousel: {
      type: Object,
      rquired: true,
    },
  },

  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    // console.log(this.titleWidth, this.descWidth);

    this.setSize();
    // console.log(this.containerSize, this.innerSize);
    // 初始化鼠标坐标位置
    this.mouseX = this.center.X;
    this.mouseY = this.center.Y;
    window.addEventListener("resize", this.setSize);

    // 图片初始位置
    // this.left =
    //   (this.containerSize.containerWidth - this.innerSize.innerWidth) / 2;
    // this.top =
    //   (this.containerSize.containerHeight - this.innerSize.innerHeight) / 2;
    // this.$refs.inner.style.top = this.top;
    // this.$refs.inner.style.left = this.left;

    // console.log(this.mouseX, this.mouseY);
  },

  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },

  computed: {
    // 图片位移
    imgMove() {
      if (!this.containerSize || !this.innerSize) {
        // console.log("error: 还未获取容器尺寸");
        return;
      }
      const extraWidth =
        this.containerSize.containerWidth - this.innerSize.innerWidth; // 多出的宽度
      const extraHeight =
        this.containerSize.containerHeight - this.innerSize.innerHeight; // 多出的高度
      const left =
        (extraWidth / this.containerSize.containerWidth) * this.mouseX; // 鼠标位移横向距离
      const top =
        (extraHeight / this.containerSize.containerHeight) * this.mouseY; // 鼠标位移纵坐标
      // console.log(left, top);

      return {
        transform: `translate(${left}px,${top}px)`,
      };
    },

    // 鼠标坐标初始位置
    center() {
      return {
        X: this.containerSize.containerWidth / 2,
        Y: this.containerSize.containerHeight / 2,
      };
    },
  },

  methods: {
    setSize() {
      this.containerSize = {
        containerWidth: this.$refs.container.clientWidth,
        containerHeight: this.$refs.container.clientHeight,
      };
      this.innerSize = {
        innerWidth: this.$refs.inner.clientWidth,
        innerHeight: this.$refs.inner.clientHeight,
      };
      // console.log(this.containerSize, this.innerSize)
    },

    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientWidth; // Reflow
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      this.$refs.desc.clientWidth; // Reflow
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
      this.$refs.desc.style.left = "65px";
    },

    handleMouseMove(e) {
      // 获取容器的定位（横纵坐标）
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
      // console.log(e);
    },

    handleMouseLeave() {
      this.mouseX = this.center.X;
      this.mouseY = this.center.Y;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.carousel-item-container {
  // test
  span {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  // test

  color: white;
  position: relative;
  // background: #000;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  & .carousel-img {
    width: 110%;
    height: 110%;
    transition: 0.3s;
    position: absolute;
    top: 0;
    left: 0;
  }
  & img {
    .self-fill();
  }
}
.desc,
.title {
  .self-center(absolute);
  opacity: 0;
  left: 30px;
  letter-spacing: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
}
.title {
  transform: translateY(-50%-45px);
  font-size: 2em;
}
.desc {
  transform: translateY(-50%+130px);
  font-size: 1.2em;
}
</style>
