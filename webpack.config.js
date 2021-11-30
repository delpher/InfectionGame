const path = require('path');

module.exports = {
  entry: './source/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/scripts'),
  },
  mode: 'development',
  module: {
      rules: [
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
    ]
  }
};