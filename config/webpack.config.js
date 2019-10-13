const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
	 entry: "./plugin/src/index.js", 
	 output: 
	 {
	 	 path: path.resolve(__dirname, 'plugin/dist/'),
	 	 filename: 'bundle.js',
	 	 publicPath: '/'
	 }, 
	 devServer: 
	 {    
	 	contentBase: path.join(__dirname, 'plugin/dist/'),
	 	filename: 'bundle.js',
	 	historyApiFallback: true,
	 	port: 4000
	 },  
	 module: 
	 {    
	 	rules: 
	 	[ {     
	 		test: /\.(js|jsx)$/,
	   		exclude: /node_modules/,      
	   		use: ['babel-loader']    
	   	  },
		  {
		  	test: /\.s[ac]ss$/i,
		    use: [
		      'style-loader',
		      'css-loader',
		      {
	              loader: 'sass-loader',
	          },
		    ],
		  },
		]  
	 },
	 devtool: '#eval-source-map', // check errors on exact file as we are using webpack
	 plugins: [
	 	new HtmlWebpackPlugin({
	 	        title: 'OnShape assembly viewer in react',
	 	        template: path.resolve(__dirname, '../public/index.html'),
	 	        filename: 'index.html',
	 	        inject: false ,
	 	        hash: true
	 	      })
	 ]
};
