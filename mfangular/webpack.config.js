
const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const federatedModuleConfig = withModuleFederationPlugin({
  name: "mfangular",
  exposes: {
    "./app": "./src/app/app.component.ts",
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

module.exports = federatedModuleConfig;
