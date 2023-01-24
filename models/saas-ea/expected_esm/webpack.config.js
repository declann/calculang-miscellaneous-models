const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './cul_scope_0-babeled-fondued.js',
  output: {
    //path: path.resolve(__dirname, 'dist'),
    filename: './cul_scope_0-babeled-fondued.bundle.js',
    library: {
      type: 'amd'
    }
  },
};
