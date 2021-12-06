const Dotenv = require("dotenv-webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  plugins: [
    new Dotenv({
      path: "./.env",
    }),
  ].filter(Boolean),
  optimization: {
    minimize: true,
    minimizer: [`...`],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
