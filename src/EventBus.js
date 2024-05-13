// const listeners = {};

// export default {
//   /**
//    * 监听事件
//    * @param {string} eventName
//    * @param {fuc} handler
//    */
//   $on(eventName, handler) {
//     if (!listeners[eventName]) {
//       listeners[eventName] = new Set();
//     }
//     listeners[eventName].add(handler);
//   },
//   /**
//    * 移除事件
//    * @param {string} eventName
//    * @param {fuc} handler
//    */
//   $off(eventName, handler) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     listeners[eventName].delete(handler);
//   },
//   /**
//    * 触发事件
//    * @param {string} eventNmae
//    * @param  {...any} args
//    */
//   $emit(eventNmae, ...args) {
//     if (!listeners[eventNmae]) {
//       return;
//     }
//     for (const handler of listeners[eventNmae]) {
//       handler(...args);
//     }
//   },
// };

import Vue from "vue";

var app = new Vue({});
/*
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：滚动的dom元素 如果是undefined，则表示dom已经不存在
 *
 * 事件名：scrollTop
 * 含义：点击回到滚动条最顶部
 * 参数：滚动的dom元素
 */
Vue.prototype.$bus = app;

export default app;
