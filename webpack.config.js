const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname ,'build'),
        filename: "[name].bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, ""),
        compress: true,
        stats: "errors-only",
        openPage: "",
        port:9000,
        open:true
      },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        { 
            test: /\.tsx?$/, 
            use:["ts-loader"],
            exclude: [
                path.resolve(__dirname ,'node_modules')
            ]
      
        },
        {
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        },{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader",
                    options: {
                        modules: true,
                        localIdentName: '[name]__[local]--[hash:base64:5]'
                    }
                }, {
                    loader: "postcss-loader"
                }],
            })
        }
      ]
    }
  };