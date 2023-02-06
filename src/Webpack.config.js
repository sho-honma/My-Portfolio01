module.exports = {
    mode: "development",
    target: ["web", "es5"],
    entry: `${__dirname}/resources/js/index.js`,
    output: {
        path: `${__dirname}/public/js`,
        filename: "bandle.js",
    },
    watch: true,

    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
    },
    devServer: {
        hot: true,
        host: "localhost",
        port: "8080",
        static: `${__dirname}/public/js`,
        proxy: {
            "*": "http://127.0.0.1:8000",
        },
        historyApiFallback: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/react"],
                    },
                },
            },
        ],
    },
};
