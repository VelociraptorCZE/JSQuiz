const webpack = require("webpack");
const path = require("path");
const process = require("process");
const Uglify = require("uglifyjs-webpack-plugin");

process.env.NODE_ENV = "production";

module.exports = {
    entry: [
        "./src/js/app.js"
    ],
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.js|jsx?$/,
                exclude: /node_modules\/(?!(wolfuix)\/).*/,
                loader: "babel-loader",
                query: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ],
                    plugins: [
                        ["@babel/transform-react-jsx", { pragma: "h" }]
                    ],
                    cacheDirectory: true,
                },
            }
        ]},
    optimization: {
        usedExports: true,
        minimizer: [
            new Uglify({
                uglifyOptions: {
                    compress: {
                        drop_console: true,
                    }
                }
            })
        ]
    }
};