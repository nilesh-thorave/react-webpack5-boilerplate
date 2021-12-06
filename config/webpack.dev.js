const Dotenv = require("dotenv-webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  // Set the mode to development or production
  mode: "development",
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
    historyApiFallback: true,
    compress: true,
    open: false,
    hot: true,
  },
  plugins: [
    new Dotenv({
      path: "./.env",
    }),
  ].filter(Boolean),
});
