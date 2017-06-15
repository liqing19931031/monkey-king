const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8888;
const webpack = require('webpack');
// const HappyPack = require('happypack');
// const happyThreadPool = HappyPack.ThreadPool({ size: 5 });
// const BowerWebpackPlugin = require('bower-webpack-plugin');
const DEFAULT_ENV = {
  API_URL: '"http://192.168.1.30"'
};
const CURRENT_ENV = Object.assign({}, DEFAULT_ENV);
if (process.env.API_URL) {
  CURRENT_ENV.API_URL = JSON.stringify(process.env.API_URL);
  if (process.env.API_URL === '/') {
    CURRENT_ENV.API_URL = JSON.stringify('.');
  }
}
function getDefaultModules() {
  return {
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
  };
}
module.exports = {
  srcPath,
  publicPath: '/',
  port: dfltPort,
  getDefaultModules,
  postcss: () => {
    return [
      require('autoprefixer')({
        browsers: ['last 2 versions', 'ie >= 8']
      })
    ];
  },
  resolve: {
    root: path.resolve('src'),
    modulesDirectories: ['node_modules']
  },
  currentEnv: CURRENT_ENV,
  plugins: [
    // HappyPack: 为了让打包任务多线程并列运行
    // new HappyPack({
    //   id: 'js',
    //   threadPool: happyThreadPool,
    //   loaders: [
    //     'ng-annotate',
    //     'babel?presets[]=es2015&plugins[]=transform-runtime&cacheDirectory=true',
    //   ],
    // }),
    // new HappyPack({
    //   id: 'html',
    //   threadPool: happyThreadPool,
    //   loaders: ['raw!html-minify'],
    // }),
    // new HappyPack({
    //   id: 'scss',
    //   threadPool: happyThreadPool,
    //   loaders: ['style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'],
    // }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    // }),
    // new webpack.NoErrorsPlugin(), // 允许错误不打断程序
    // new webpack.DefinePlugin({
    //   'process.env': CURRENT_ENV,
    // }),
    // new BowerWebpackPlugin({
    //   searchResolveModulesDirectories: false,
    // }),
  ]
};