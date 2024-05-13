module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
      },
    },
  },
  configureWebpack: require("./webpack.config.js"),
};
