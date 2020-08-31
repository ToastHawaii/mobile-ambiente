const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglify-es-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: "./src/script.ts",
  output: {
    filename: "script.js",
    path: __dirname + "/.."
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Load a custom template
      template: "src/index.html",
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      // Load a custom template
      template: "src/inspiration.html",
      filename: "inspiration.html"
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      additionalManifestEntries: [
        "/docs/index.html",
        "/semantic/dist/semantic.min.css",
        "/semantic/dist/semantic.min.js",
        "https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
      ],
      exclude: [/\.(?:yml|md)$/, /_layouts\/.*/, /\.(?:png|jpg|jpeg|svg)$/],

      // Define runtime caching rules.
      runtimeCaching: [
        {
          // Match any request that ends with .png, .jpg, .jpeg or .svg.
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

          // Apply a cache-first strategy.
          handler: "CacheFirst",

          options: {
            // Use a custom cache name.
            cacheName: "images",

            // Only cache 10 images.
            expiration: {
              maxEntries: 10
            }
          }
        }
      ]
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new UglifyJSPlugin({
      compress: {
        drop_console: true
      }
    }),
    new CopyWebpackPlugin({ patterns: [{ from: "src/www" }] })
  ],
  mode: "production",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      // When using TypeScript, Babel is not required, but React Hot Loader will not work (properly) without it.
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true
            }
          },
          {
            loader: "awesome-typescript-loader",
            options: {
              configFileName: "src/tsconfig.json"
            }
          }
        ]
      },

      // Load CSS files, embed small PNG/JPG/GIF/SVG images as well as fonts as Data URLs and copy larger files to the output directory
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      }
    ]
  }
};
