const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");

const isDevelopment = process.env.NODE_ENV !== "production";

const px2remLoader = {
  loader: "px2rem-loader",
  options: {
    remUnit: 75, // 75px = 1rem
    remPrecision: 8,
  },
};

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devServer: {
    static: false,
    port: 8000,
    open: true,
  },
  entry: {
    index: "./src/pages/vw/vw.tsx",
  },
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.css$/i,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "postcss-loader",
              px2remLoader,
            ],
          },
          {
            test: /\.less$/i,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "postcss-loader",
              "less-loader",
              px2remLoader,
            ],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
          {
            test: /\.(js|jsx|tsx)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "thread-loader",
                options: {
                  worker: require("os").cpus().length - 1,
                },
              },
              {
                loader: "babel-loader",
                options: {
                  cacheDirectory: true,
                  cacheCompression: false,
                  presets: [
                    "@babel/preset-env",
                    "@babel/preset-react",
                    "@babel/preset-typescript",
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ],
  resolve: {
    alias: {
      "@assert": path.resolve(__dirname, "./src/assert"),
      "@src": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
  performance: {
    hints: false,
  },
};
