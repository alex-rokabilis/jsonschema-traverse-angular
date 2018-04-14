const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    library: "jsonSchemaTraverse",
    libraryTarget: "umd",
    filename: "jsonSchemaTraverse.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  externals: {
    angular: "angular"
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: "Output Management",
    //   template: "src/index.html"
    // })
  ]
};
