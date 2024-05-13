// export default {
//   bind(el, binding) {
//     console.log(binding, el);
//   },
//   inserted() {
//     console.log("inserted");
//   },
//   update() {
//     console.log("update");
//   },
// };

// 创建img元素
function getCreatImg() {
  const img = document.createElement("img");
  img.className = styles.loading;
  img.src = url;
  img.dataset.role = "loading"; // 自定义属性
  return img;
}

// 得到当前的img元素（之前所创建的img元素）
function getUrlImg(el) {
  return el.querySelector("img[data-role=loading]");
}

import url from "@/assets/loading.svg";
import styles from "./loading.module.less";
export default function (el, binding) {
  const curImg = getUrlImg(el);

  if (binding.value) {
    // 如果没有之前的img元素  (不加该判定会存在两个相同的img元素 bind()创建一个  update()创建一个)
    if (!curImg) {
      const img = getCreatImg();
      el.appendChild(img);
    }
  } else {
    if (curImg) {
      curImg.remove();
    }
  }
}
