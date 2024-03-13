const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");

const isDevelopment = process.env.NODE_ENV !== "production";

const postcssOptions = {
  loader: "postcss-loader",
  options: {
    postcssOptions: {
      plugins: [
        [
          "postcss-preset-env",
          {
            // Options
          },
        ],
        [
          "postcss-px-to-viewport",
          {
            unitToConvert: "px", // 要转化的单位
            viewportWidth: 750, // UI设计稿的宽度
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ["wrap"], // 指定不转换为视窗单位的类名，
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
            landscape: false, // 是否处理横屏情况
          },
        ],
      ],
    },
  },
};

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devServer: {
    static: false,
    port: 8001,
    open: true,
  },
  devtool: 'source-map',
  entry: {
    index: "./src/pages/vw/app.jsx",
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
            use: [MiniCssExtractPlugin.loader, "css-loader", postcssOptions],
          },
          {
            test: /\.less$/i,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              postcssOptions,
              "less-loader",
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
