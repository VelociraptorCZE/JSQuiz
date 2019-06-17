const webpack = require("webpack");
const path = require("path");
const process = require("process");

process.env.NODE_ENV = "production";

module.exports = {
    watch: true,
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
        ]}
};