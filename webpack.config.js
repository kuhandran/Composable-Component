const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      maxSize: 250000,
    },
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack-Setup",
      template: './src/index.html'
    }),
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      runtime: true,
      linkType: "text/css",
    })
  ],
  devServer: {
    port: 3030, // you can change the port
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.json$/,
        loader: 'json',
        include: /static/,
        options: {
          esModule: false,
          outputPath: '/static/',
          publicPath: "/static/"
        }
      },
      {
        test: /\.(png|jpe?g|gif|ico)(\?\S*)?$/,
        loader: 'file-loader',
        include: /static/,
        options: {
          esModule: false,
          outputPath: '/static/',
          publicPath: "/static/"
        }
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
};