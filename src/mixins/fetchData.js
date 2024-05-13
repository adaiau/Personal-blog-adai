// 公共代码 获取远程数据  设置事件总线
// 外部使用须提供一个fechData()函数 来获取远程数据
export default function (defaultFechData = null) {
  return {
    data() {
      return {
        datas: defaultFechData, // 获取的远程数据
        isLoading: true, // 远程数据是否在加载中
        isMore: true, // 是否还有更多的数据
      };
    },

    async created() {
      // console.log(this);
      this.datas = await this.fetchData();
      this.isLoading = false;
    },
  };
}
