const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { camelCase } = require("camel-case");
const { merge } = require("webpack-merge");

// ===================================================

const pkg = require("./package.json");
const name = camelCase(pkg.name);

// The modules you want to expose
const exposes = {
  "./main": "./src/main.ts",
};

const deps = require("./package.json").dependencies;
const shared = {
  ...deps,
  react: {
    singleton: true,
    requiredVersion: deps.react,
  },
};

// ===================================================

module.exports = (env, argv) => {
  let config = {
    entry: "./src/dev.tsx",
    output: { path: path.join(__dirname, "dist"), filename: "index.bundle.js" },
    mode: argv.mode,
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devServer: { contentBase: path.join(__dirname, "src") },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ["ts-loader"],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
        {
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: ["file-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "dev.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "css/styles.css",
      }),
    ],
  };

  if (argv.mode === "development") {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.devServer = {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000,
    };

    return config;
  }

  return [merge(config, browserConfig), merge(config, nodeConfig)];
};

/** @type {webpack.Configuration} */
const browserConfig = {
  output: {
    path: path.resolve("./dist/browser"),
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name,
      filename: "remote-entry.js",
      exposes,
      shared,
    }),
  ],
};

/** @type {webpack.Configuration} */
const nodeConfig = {
  target: "node",
  output: {
    path: path.resolve("./dist/node"),
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name,
      filename: "remote-entry.js",
      library: { type: "commonjs" },
      exposes,
      shared,
    }),
  ],
};
