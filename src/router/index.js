import Vue from "vue";
import VueRouter from "vue-router";
import routers from "./routers";
import { titleController } from "../utils";

if (!window.Vue) {
  Vue.use(VueRouter); // 使用VueRouter插件
}
const router = new VueRouter({
  // 配置
  routes: routers, //路由匹配规则
  mode: "history", // 路由匹配模式
});

router.afterEach((to) => {
  if (to.meta.title) {
    titleController.setRouterTitle(to.meta.title);
  }
});

/**
 * 解决报错
 * 在使用this.$router.push跳转页面时候，重复点击菜单引起路由重复报错
 */
// 获取原型对象push函数
const originalPush = VueRouter.prototype.push;

// 获取原型对象replace函数
const originalReplace = VueRouter.prototype.replace;

// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

// 修改原型对象中的replace函数
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};
/** */

// 将router导出
export default router;
