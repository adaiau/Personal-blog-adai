// 入口文件
import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import showMessage from "./utils/showMessage";
import "./EventBus";
import store from "./store";
store.dispatch("setting/fetchSetting");
store.dispatch("project/fetchProject");
Vue.prototype.$showMessage = showMessage;

// 注册全局指令
import vLoading from "./directives/Loading";
import vLazy from "./directives/Lazy";
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
