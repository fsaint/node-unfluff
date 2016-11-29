module.exports = {
module: {
        loaders: [
            { test: /\.json$/, loader: "json" }
        ]
    },
      entry: './app.js',
        output: {
                filename: 'bundle.js'
        }
}
