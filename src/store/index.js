import { Store, install } from "vuex";
import Vue from "vue";
import setting from "./setting";
import banner from "./banner";
import about from "./about";
import project from "./project";
if (!window.Vuex) {
  install(Vue);
}

const store = new Store({
  strict: true,
  modules: {
    banner,
    setting,
    about,
    project,
  },
});

export default store;
