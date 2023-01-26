// webpack.dev.config.js
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.config.js");

const devConfig = merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 8882,
    host: "127.0.0.1", // localhost:21000 had this host
    historyApiFallback: true,
    hot: true,
    // proxy: [
    //   {
    //     context: ["/api"],
    //     target: "http://localhost:21000",
    //     secure: false,
    //   },
    // ],
  },
});

module.exports = devConfig;
