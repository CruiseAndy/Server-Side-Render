const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');	// 程式碼壓縮

module.exports = {
    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browser: ['last 2 versions'] }}]
                    ]
                }
            }
        ]
    },
	plugins: [
		new ParallelUglifyPlugin({
            cacheDir: '.cache/',
            uglifyJS:{
                output: {
                    comments: false
                },
                compress: {
                    warnings: false
                }
            }
		})
	]
};