module.exports = {
module: {
        loaders: [
            { test: /\.json$/, loader: "json" },
           	{ test: /\.coffee$/, loader: "coffee-loader" }
        ]
    },
      entry: './app.js',
        output: {
                filename: 'bundle.js',
				libraryTarget: 'var',
				library: 'EntryPoint',
        }
}
