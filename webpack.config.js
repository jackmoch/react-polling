module.exports = {
	devtool: "inline-sourcemap",
	entry: "./app-client.js",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders: [
			{
				exclude: /(node_module | app-server.js)/,
				loader: "babel-loader",
				query: {
        	presets: ['react', 'es2016', 'stage-0']
      	}
			}
		]
	}
}