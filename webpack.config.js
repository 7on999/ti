const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: './ts/main.ts',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		port: 4200,
		watchFiles: ['src/*html']
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html',
			minify: {
				collapseWhitespace: true
			}
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
			  { from: "assets/images", to: "img" },
			],
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		})
	],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
            {
                test: /\.svg$/,
                use: [
                  'svg-sprite-loader',
                  'svgo-loader'
                ]
            },
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				use: ['file-loader']
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.ts?$/,
				exclude: /node_modules/,
				use: ['ts-loader']
			}
		]
	}
}