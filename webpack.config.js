const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: path.resolve(__dirname, "src/server/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader"
    }]
  },
  target: "node",
  externals: [nodeExternals()],
  mode: "development"
};
