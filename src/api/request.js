import axios from "axios";
import showMessage from "@/utils/showMessage";

const ins = axios.create();
// Axios响应拦截
ins.interceptors.response.use(function (resp) {
  // console.log("拦截了响应", resp);
  if (resp.data.code !== 0) {
    showMessage({
      content: resp.data.msg,
      type: "error",
      duration: 1500,
    });
    resp.data.data = null;
  }
  return resp.data.data;
});

export default ins;
