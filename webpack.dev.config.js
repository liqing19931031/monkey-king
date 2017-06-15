// 本地环境配置
var webpack = require('webpack');
var path = require('path');
var base = {
	// 页面入口文件配置
	entry: { 
		app: path.join(__dirname, 'src/main.js')
	},
	// 入口文件输出配置
	output: {
		path: __dirname + '/static',
		filename: '[name].js'
	},
	module: {
		// 加载器配置
		loaders: [
			{
				text: /\.js$/, //判断当文件类型为js的时候,进行es6的转义
				exclude: /node_modules/, //忽视exclude下的文件,不进行转义
				loader: 'babel'
			},
			{
				text: /\.jsx$/, //判断当文件类型为jsx的时候,进行es6的转义
				loader: 'babel'
			},
			{ 	
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
      		{ 	
      			test: /\.less$/,
      			loader: 'style-loader!css-loader!less-loader'
      		},
      		{ 	test: /\.(png|jpg)$/,
      			loader: 'url-loader?limit=8192'
      		}
		]
	},
	eslint: {
		configFile: '.eslintrc.json'
	},
	watch: true, //实时监听不用手动进行编译
	// 全局引用jquery
	externals: {
		jquery: 'window.$'
	},
	resolve: {
		// 这特么真的是巨坑,在WINDOWS环境下必须加root. ps:我也不知道为什么╮(╯▽╰)╭,据说mac的不需要没有经过测试
		root: [
			path.join(__dirname + '/src'),
			path.join(__dirname + '/node_modules'),
			path.join(__dirname + '/static'),
			path.join(__dirname)
		],
		// 这里用来指定模块的后缀,这样你再引入模块的时候就不需要再写后缀名了
        extensions: ['', '.js', '.less', '.jsx']
    },
    devServer: {
    	contentBase: './static',
	    colors: true,//终端中输出结果为彩色
	    hot: true,
	    progress: true,
	    historyApiFallback: true,//不跳转
	    inline: true//实时刷新
	},
	plugins: [
	    new webpack.HotModuleReplacementPlugin()
	]
	
}

module.exports = base;