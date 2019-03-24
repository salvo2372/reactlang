var path = require('path');
var webpack = require('webpack');

var config = {
	entry: './index.js',
	output:{
		path: __dirname,
		filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
	},
  module: {
         loaders: [
						 {
	             test: /\.js?/,
	             loader: ['babel-loader'],
							 exclude: /node_modules/
	         		},
				      {
				        test: /\.css$/,
				        loader: 'style-loader!css-loader'
				      },
				      {
				        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				        loader: 'url-loader',
				        options: {
				          limit: 10000
				        }
				      },
			        {
			          test: /\.(woff|woff2|eot|ttf|otf)$/,
			          use: [
			            'file-loader'
			          ]
			        },
			        {
			          test: /\.(csv|tsv)$/,
			          use: [
			            'csv-loader'
			          ]
			        },
			        {
			          test: /\.xml$/,
			          use: [
			            'xml-loader'
			          ]
			        },
							{
				        test: /\.mysql$/,
				        loader: 'mysql-loader',
				        query: {
				          host: 'localhost',
				          user: 'root',
				          password: '',
				          database: 'word581'
				        }
				      }
			 		]
  }
};

module.exports = config;
