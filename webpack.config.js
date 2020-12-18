const path = require("path");

module.exports = {
  mode: "development",
  entry: [],
  //   entry: { landing: "./src/index.tsx" },
  //   entry: ["@babel/polyfill", "./src/index.tsx"],
  output: {
    path: path.join(__dirname, "./static/build/"),
    filename: "[name].js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/typescript", "@babel/preset-env"],
          },
        },
      },
      {
        test: /.tsx$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/typescript",
              "@babel/preset-react",
              "@babel/preset-env",
            ],
          },
        },
      },
    ],
  },
  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
  plugins: [],
  devServer: {
    contentBase: "./static/build/",
    port: 8080,
  },
};
