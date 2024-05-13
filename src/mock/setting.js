import Mock from "mockjs";
import qq from "@/assets/qq.jpg";
import weixin from "@/assets/weixin.jpg";

Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
    name: "没带伞的傻瓜",
    siteTitle: "我的个人空间",
    github: "https://github.com/adaiau",
    qq: "2315809113",
    qqQrCode: qq,
    weixin: "qiu542634",
    weixinQrCode: weixin,
    mail: "adai548524@gmail.com",
    icp: "阿呆ICP凨凪凮夙",
    githubName: "adaiau",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
