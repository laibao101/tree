module.exports = {
    entry: {
        index: "./ts/index"
    },
    output: {
        filename: "[name].js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: [{
                    loader: "babel-loader"
                },
                "ts-loader"
            ],
            exclude: /node_modules/
        }]
    }
}