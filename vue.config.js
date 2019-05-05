module.exports = {
	runtimeCompiler: true,
	productionSourceMap: false,
	devServer: {
		headers: {
		"Access-Control-Allow-Origin":"\*"
		},
	},
	css: {
	loaderOptions: {
			sass: {
				data: `@import "@/App/Styles/index.scss";`
			}
		}
	}
}