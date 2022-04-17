const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
   entry: {
      main: "./src/index.js",
   },
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
      publicPath: "",
   },
   target: ["web", "es5"],
   stats: { children: true },
   mode: "development",
   devServer: {
      static: path.resolve(__dirname, "./dist"),
      compress: true,
      hot: true,     
      port: 8000,
      open: true,
   },
   devtool: "inline-source-map",
   module: {
      rules: [
         {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: "/node_modules/",
         },
         // CSS rules
         {
            test: /\.css$/,
            use: [
               "style-loader",
               {
                  loader: "css-loader",
                  options: {
                     importLoaders: 1,
                     modules: true,
                  },                  
               },
               
            ],
         },
      ],
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: "./src/index.html",
      }),
      new CleanWebpackPlugin(),
   ],
};

// module.exports = {
//    mode: 'development',

//    output: {
//       clean: true
//    },

//    module: {
//       rules: [
//          {
//             test: /\.html$/,
//             loader: 'html-loader',
//             options: {
//                sources: false
//             }
//          },
//          {
//             test:/\.css$/,
//             exclude: /styles.css$/,
//             use: [ 'style-loader', 'css-loader']
//          },
//          {
//             test: /styles.css$/,
//             use: [MiniCssExtractPlugin.loader, 'css-loader']
//          },
//          {
//             test: /\.(png|jpe?g|gif)$/,
//             loader: 'file-loader'
//          }
//       ]
//    },
//    optimization: {},

//    plugins: [
//       new HtmlWebPackPlugin({
//          title: 'webpack bundler',
//          // filename: 'index.html',
//          template: './src/index.html'
//       }),
//       new MiniCssExtractPlugin({
//          // filename:'[name].[fullhash].css',
//          filename:'[name].css',
//          ignoreOrder: false
//       }),
//       new CopyPlugin({
//          patterns: [
//            { from: "src/assets", to: "assets/" }
//          ]
//        }),

//    ]
// }
