import { getSetting } from "@/api/setting";
import { titleController } from "../utils";

export default {
  namespaced: true,

  state: {
    loading: false,
    data: null,
  },

  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
  },

  actions: {
    async fetchSetting(ctx) {
      ctx.commit("setLoading", true);
      const resp = await getSetting();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);

      titleController.setSiteTitle(resp.siteTitle);
      //   <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
      if (resp.favicon) {
        let link = document.querySelector("link[rel='icon']");
        if (link) {
          return;
        } else {
          link = document.createElement("link");
          link.rel = "icon";
          link.type = "image/x-icon";
          link.href = resp.favicon;
          document.querySelector("head").appendChild(link);
        }
      }
    },
  },
};
