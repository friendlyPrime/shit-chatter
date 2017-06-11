var path = require('path');
var webpack = require('webpack');

var DEVELOPMENT = process.env.NODE_ENV === "development";
var PRODUCTION = process.env.NODE_ENV === "production";

var entry = PRODUCTION ?
['./src/js/index.js']
:
['./src/js/index.js',
  'webpack/hot/dev-server',
  'webpack-dev-server/client?http://localhost:8080'];

var plugins = PRODUCTION ?
[] :
[new webpack.HotModuleReplacementPlugin()];

module.exports = {
  devtool: 'source-map',
  entry: entry,
  plugins: plugins,
  module:{
    loaders: [{
    			test: /\.js$/,
    			loader: 'babel-loader',
          query: {
              presets: ['react', 'es2015', 'stage-0']
            },
    			exclude: /node_modules/
		  },{
    			test: /\.(png|jpg|gif)$/,
    			loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]'],
    			exclude: /node_modules/
		  }
    ]
  },
  output:{
      path : path.join(__dirname, 'dist'),
      publicPath: '/dist/',
      filename: 'shit-chatter.js'
  }
}
