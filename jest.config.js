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
    "!src/bin/server.js",
    "!src/routes/index.js",
    "!**/public/**"
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};