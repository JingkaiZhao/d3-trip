var path = require("path");
module.exports = {
    entry: {
        app: ["./app.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file'
        }]
    }
};

{

  // {
  //   // HTML LOADER
  //   // Reference: https://github.com/webpack/raw-loader
  //   // Allow loading html through js
  //   // test: /\.html$/,
  //   // loader: 'null'
  // }
};
