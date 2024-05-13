export default function (get, post) {
  return {
    data() {
      return {
        page: 1,
        limit: 10,
      };
    },
    created() {
      this.$bus.$on("mainScroll", this.handleScroll);
    },
    destroyed() {
      this.$bus.$off("mainScroll", this.handleScroll);
    },
    computed: {
      rows() {
        return this.datas.rows;
      },
      hasMore() {
        return this.datas.rows.length < this.datas.total;
      },
    },
    methods: {
      async fetchData() {
        return await get(this.page, this.limit, this.$route.params.id);
      },
      handleScroll(dom) {
        if (this.isLoading || !dom) {
          // 目前正在加载更多
          return;
        }
        const range = 100; // 顶一个可接受的范围，在这个范围内都算达到了底部
        const dec = Math.abs(
          dom.scrollTop + dom.clientHeight - dom.scrollHeight
        );
        if (dec <= range) {
          this.fetchMore();
        }
      },
      // 加载下一页
      async fetchMore() {
        this.isLoading = true;
        if (!this.hasMore) {
          this.isMore = false;
          this.isLoading = false;
          return;
          // 没有更多啦
          return;
        }
        this.page++;
        const resp = await this.fetchData();
        this.datas.total = resp.total;
        // 将新增加的数据与之前的数组合并
        this.datas.rows = this.datas.rows.concat(resp.rows);
        this.isLoading = false;
      },
      async handleSubmit(data, callback) {
        const resp = await post({ ...data, blogId: this.$route.params.id }  );
        callback(this.content);
        // 将新的评论添加到数组开头
        this.datas.rows.unshift(resp);
        this.datas.total++;
      },
    },
  };
}
