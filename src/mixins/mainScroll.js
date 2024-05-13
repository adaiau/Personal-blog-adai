export default function (refValue) {
  return {
    mounted() {
      this.$bus.$on("scrollTop", this.handleSetMainScroll);
      this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
    },
    beforeDestroy() {
      this.$bus.$emit("mainScroll");
      this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
      this.$bus.$off("scrollTop", this.handleSetMainScroll);
    },

    methods: {
      handleMainScroll() {
        this.$bus.$emit("mainScroll", this.$refs[refValue]);
      },
      handleSetMainScroll(scrollTop) {
        this.$refs[refValue].scrollTop = scrollTop;
        location.hash = "";
        // this.$router.push({ hash: "" });
      },
    },
  };
}
