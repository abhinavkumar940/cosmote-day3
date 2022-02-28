const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: ["./js/app.js", "./app.scss"],
  devServer: {
    liveReload: true,
    hot: true,
    open: true,
    static: ["./"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],

  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "bundle.css",
            },
          },
          { loader: "extract-loader" },
          { loader: "css-loader" },
          {
            loader: "sass-loader",
            options: {
              // Prefer Dart Sass
              implementation: require("sass"),

              // See https://github.com/webpack-contrib/sass-loader/issues/804
              webpackImporter: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },

      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
