const path = require("path");
const webpack = require("webpack");

const ENV = process.env.NODE_ENV || "development";

module.exports = {
  mode: ENV,
  entry: "./index.ts",
  target: "node",
  devtool: "cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.ts(x*)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: "text-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "react-gtk": path.resolve(__dirname, "lib"),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(ENV),
    }),
  ],
};
