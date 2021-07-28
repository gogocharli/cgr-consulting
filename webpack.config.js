const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.APP_ENV === 'development';

// In dev mode, output the files as is, but in production mode, add a hash at the end of the files
const baseFilename = isDev ? 'index' : 'index.[contenthash]';

// Will allow us to have access to the hashed filenames at build time in the layout
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { url } = require('inspector');

module.exports = {
  // Process the css and js files and output in dist/assets
  context: path.resolve(__dirname),
  entry: [
    path.resolve(__dirname, 'src', 'scripts', 'index.js'),
    path.resolve(__dirname, 'src', 'styles', 'base.scss'),
  ],
  output: {
    path: path.resolve(__dirname, 'src', 'assets'),
    filename: `${baseFilename}.js`,
  },
  // Process the js with babel and the css with the css and postcss loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 1,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: ['./node_modules/gorko/'],
              },
            },
          },
        ],
      },
    ],
  },
  // Extracts the CSS in a seperate file
  plugins: [
    new MiniCssExtractPlugin({ filename: `${baseFilename}.css` }),
    new WebpackManifestPlugin({ publicPath: '/assets/' }),
  ],
};
