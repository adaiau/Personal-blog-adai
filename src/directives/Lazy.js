import EventBus from "@/EventBus";
import { debounce } from "@/utils";
import defaultGif from "@/assets/default.gif";

// 图片懒加载
let imgs = [];
function setImage(img) {
  // 先全都用默认图片替代  等待加载
  img.dom.src = defaultGif;
  const li = img.dom.parentNode.parentNode.parentNode;
  const liRect = li.getBoundingClientRect(); // li元素所在矩形框对象
  const clientHeight = document.documentElement.clientHeight; // 视口高度
  // 加载一张图片
  if (liRect.bottom > 0 && liRect.top <= clientHeight) {
    // 如果图片所在的li在视口范围内  则加载
    const tempImg = new Image();
    tempImg.src = img.src;
    tempImg.onload = () => {
      // 当临时图片加载完之后  替换图片
      img.dom.src = img.src;
    };
    // img.dom.src = img.src;
    // 切换窗口时  删除之前已经加载的
    imgs = imgs.filter((i) => i !== img);
  }
}
function setImages() {
  // 循环加载每一个图片
  for (const img of imgs) {
    // 加载每一张图片
    setImage(img);
  }
}

// setTimeout(() => console.log(imgs), 1000);

// 滑轮滚动的时候  就调用加载函数
function handleScroll() {
  setImages();
}

EventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
  inserted(el, binding) {
    const img = {
      dom: el,
      src: binding.value, // 暂时存一下  后面需要它来替换
    };
    // 将单个 img 对象 一个一个加入到 imgs 数组里面
    imgs.push(img);

    // 先立即加载一次
    setImages(img);
  },
  unbind(el) {
    imgs.filter((img) => img.dom !== el);
  },
};
