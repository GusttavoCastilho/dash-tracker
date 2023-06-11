module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      ["babel-plugin-root-import", { rootPathSuffix: "src" }],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-transform-modules-commonjs"],
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@src": "./src",
            "@data": "./src/data",
            "@domain": "./src/domain",
            "@infra": "./src/infra",
            "@main": "./src/main",
            "@presentation": "./src/presentation",
            "@tests": "./tests",
          },
        },
      ],
      ["@babel/plugin-transform-runtime"],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};
