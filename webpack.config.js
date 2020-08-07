/*
 * webpack.config.js
 *
 * Author: Lain Musgrove (lain.proliant@gmail.com)
 * Date: Thursday August 6, 2020
 *
 * Distributed under terms of the MIT license.
 */
module.exports = {
    entry: './src/app.tsx',
    output: {
        path: __dirname + '/public',
        filename: 'build/app.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}
