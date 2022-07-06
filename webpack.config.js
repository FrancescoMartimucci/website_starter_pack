const path = require('path');

module.exports = {
    entry: {
        bootstrap: './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        script: {
            dependOn: 'bootstrap',
            import: './src/js/script.js',
        }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/assets/js'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    mode: 'development',
};