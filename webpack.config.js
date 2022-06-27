const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'production',
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        { loader: 'babel-loader' },
        { loader: 'ts-loader', options: { compilerOptions: { target: 'esnext' } } },
        { loader: 'custom-loader', options: { anyKey: 'anyValue' } },
      ],
    }],
  },
};
