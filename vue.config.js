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
		before: require('./src/Server/app'),
		hot: true,
		hotOnly: true,
		headers: { "Access-Control-Allow-Origin": "\*" },
		watchContentBase: false,
		historyApiFallback: true
	}
}