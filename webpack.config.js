const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index", // entry 기준으로 연관된 모든 파일 번들링
  resolve: {
    // 번들링될 확장자 등록
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        exclude: "/node_modules/",
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, "build"), // 빌드될 파일들이 만들어지는 위치
    filename: "bundle.js", // 번들 파일 이름
  },
  // webpack 서버 설정
  devServer: {
    static: path.join(__dirname, "build"), // 이경로에 있는 파일이 변경될떄 번들 다시 컴파일
    port: 3000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      // index.html에 아웃풋에서 만들어진 bundle.js 적용하여, build에 새로운 html 파일 생성
      template: `./public/index.html`,
    }),
    new MiniCssExtractPlugin({ filename: `[name].css` }), // 빌드시 css를 별도의 파일로 묶기, 사용안하면 인라인으로 html에 들어감
  ],
};
