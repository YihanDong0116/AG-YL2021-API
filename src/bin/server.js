#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('../app');

/**
 * Get port from environment and store in Express.
 */

const PORT = process.env.PORT || 3000;

/**
 * Create HTTP server.
 * Listen on provided port, on all network interfaces.
 */

const server = app.listen(PORT, () => {
  const { port } = server.address();

  console.log('API server listening at localhost:%s', port);
});

module.exports = server;
