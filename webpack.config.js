module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test :/\.css$/, loader: "style!css"},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test :/\.jsx$/,
                exclude: /(node_module|bower_components)/,
                loaders: ["babel-loader"]
            }
        ]
    }
};
