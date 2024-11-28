const path = require("path");

module.exports = {
  webpack: {
    // set up path alias for project
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  jest: {
    configure: {
      // set up path alias for unit tests
      moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
      },
    },
  },
};
