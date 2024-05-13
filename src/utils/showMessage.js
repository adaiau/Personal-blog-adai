import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";
/**
 *
 * @param {String} content 消息内容
 * @param {String} type 消息类型 普通：info 错误：error 警告：warn 成功：success
 * @param {Number} duration 改时间后消失
 * @param {HTMLelement} container 消息盒子的参考容器  如果不传  显示在页面中间
 */

export default function (options = {}) {
  const content = options.content || "message";
  const type = options.type || "info";
  const duration = options.duration || 2000;
  const container = options.container || document.body;
  // 创建消息元素
  const div = document.createElement("div");
  // 得到Icon组件内部的dom元素
  const iconDom = getComponentRootDom(Icon, { type });
  // console.log(iconDom);
  //   console.log(styles);
  //   const typeClassname = styles["message-" + `${type}`];

  // 改变其默认字体大小
  iconDom.style["font-size"] = 22 + "px";

  div.innerHTML = `<div class="${styles.icon}">${iconDom.outerHTML}</div><span>${content}</span>`;
  //   console.log(div);

  const typeClassname = styles[`message-${type}`];
  //   console.log(typeClassname);
  div.className = `${styles.message} ${typeClassname}`;

  // //  如果container是body的话  div的position改为fixed
  // if (container === document.body) {
  //   div.style.position = "fixed";
  // }

  //  判断container（容器）的已计算属性中 position是否被动过（是否是static）
  if (options.container) {
    if (getComputedStyle(container).position === "static") {
      // 如果是 将其改为 relative
      container.style.position = "relative";
    }
  }

  // 将div加入到容器
  container.appendChild(div);

  // 浏览器强制提前渲染
  div.clientHeight;
  // console.log(div);
  div.style.opacity = 1;
  div.style.transform = `translate(-50%,-50%)`;

  //   两秒后消失
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%,-50%) translateY(-25px)`;
    // 消失后将div元素删除
    div.addEventListener(
      "transitionend",
      () => {
        // transition时间结束后 删除（remove div元素）
        div.remove();
        // 如果设置了回调函数进行后续操作 就运行
        options.callback && options.callback();
      },
      { once: true }
    );
  }, duration);
}
