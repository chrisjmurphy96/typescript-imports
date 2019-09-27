module.exports = {
    entry: "./src/test.ts",
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: './app.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            // {
            //     test: /\.ts$/,
            //     loader: 'tslint-loader',
            //     exclude: /node_modules/,
            //     enforce: 'pre'
            // },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true
                }
            },
        ]
    }
}