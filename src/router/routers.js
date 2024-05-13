import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";
import NotFound from "../views/NotFound.vue";

// ngprogress 配置
configure({ trickleSpeed: 10, showSpinner: false });

// 模拟生产环境 延时
function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
/**
 * 异步得到组件
 * @param {fn} pageCompResolver
 */
function getPageComponent(pageCompResolver) {
  return async () => {
    start();
    if (process.env.NODE_ENV === "development") {
      await delay(1000);
    }
    const comp = await pageCompResolver();
    done();
    return comp;
  };
}

// 导出配置
export default [
  {
    name: "Home",
    path: "/",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "home" */ "@/views/Home")
    ),
    meta: { title: "首页" },
  },
  {
    name: "Blog",
    path: "/artical",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "blog" */ "@/views/Blog")
    ),
    meta: { title: "文章" },
  },
  // 动态路由
  {
    name: "CategoryBlog",
    path: "/artical/cate/:categoryId",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "blog" */ "@/views/Blog")
    ),
    meta: { title: "文章" },
  },
  {
    name: "Detail",
    path: "/artical/:id",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "blog" */ "@/views/Blog/Detail")
    ),
    meta: { title: "文章详情" },
  },

  {
    name: "About",
    path: "/about",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "about" */ "@/views/About")
    ),
    meta: { title: "关于我" },
  },
  {
    name: "Project",
    path: "/project",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "project" */ "@/views/Project")
    ),
    meta: { title: "项目&效果" },
  },
  {
    name: "Message",
    path: "/message",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "message" */ "@/views/Message")
    ),
    meta: { title: "留言板" },
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound,
  },
];
