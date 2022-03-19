const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./index.js",
    windows: "./windows.js",
    kitchens: "./kitchens.js",
    balcony: "./balcony.js",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    hot: true,
    static: {
      directory: "./dist",
      watch: true,
    },
  },
};
