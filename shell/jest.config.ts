module.exports = {
  clearMocks: true,
  restoreMocks: true,
  testEnvironment: "jsdom",
  preset: "ts-jest/presets/js-with-ts",
  testMatch: ["**/*.test.(js|ts|tsx)"],
  collectCoverage: false,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
