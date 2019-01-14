const HtmlWebPackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;
module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
					'eslint-loader'
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.less$/,
				use: [{
					loader: 'style-loader'
				},
				{
					loader: 'css-loader',
					options: {
						sourceMap: true,
						modules: true,
						localIdentName: '[local]__[hash:base64:5]'
					}
				},
				{
					loader: 'less-loader'
				}]
			},
			{
				test: /\.(png|svg|jpg|gif|ico)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: 'src/assets/images/[name].[ext]'
					}
				}]
			},
			{
				test: /\.ttf$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'src/assets/fonts/'
					}
				}]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './index.html',
			favicon: 'src/assets/images/ballIcon.ico'
		})
	],
	devServer: {
		host: 'localhost',
		port,
		historyApiFallback: true,
		open: true
	}
};
