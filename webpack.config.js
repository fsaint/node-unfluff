module.exports = {
module: {
        loaders: [
            { test: /\.json$/, loader: "json" },
           	{ test: /\.coffee$/, loader: "coffee-loader" }
        ]
    },
      entry: './app.coffee',
        output: {
                filename: 'bundle.js'
        }
}
