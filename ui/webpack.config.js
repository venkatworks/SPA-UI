const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, './src')
};

module.exports = {
    entry:{ app: [path.join(paths.SRC, 'index.js')]},
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test:/\.css$/,
            use:['style-loader','css-loader']
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
            {
                loader: 'file-loader',
                options: {},
            }]
          }
        ]
      },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        htmlPlugin
    ],
    devServer: {
      contentBase: './dist',
      hot:true
    }
  };