module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageReporters: [
    "text", 
    "html",
  ],
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!**/*.test.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!src/server.js",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};