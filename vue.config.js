
module.exports = {
	runtimeCompiler: true,
	productionSourceMap: false,
	css: {
		loaderOptions: {
			sass: {
				data: `@import "~@/App/Styles/index.scss";`
			}
		}
	},
	devServer: {
		// before: require('./src/Server/app'),
		historyApiFallback: true,
		hot: true,
		hotOnly: true,
		compress: true,
		headers: { "Access-Control-Allow-Origin": "\*" },
		watchContentBase: false,
	}
}