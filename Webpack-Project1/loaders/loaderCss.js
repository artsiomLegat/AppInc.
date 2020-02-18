module.exports = {
    test: /\.css$/,
    use: [
        'style-loader',
        'css-loader',
    ],
    exclude: /\.module\.css$/,
}