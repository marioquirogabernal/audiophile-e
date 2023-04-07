const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "index.jsx"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
}
