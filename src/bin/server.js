#!/usr/bin/env node

/**
 * Module dependencies.
 */
const log = require('../util/log');
const app = require('../app');

/**
 * Get port from environment and store in Express.
 */

const PORT = process.env.PORT || 3001;

/**
 * Create HTTP server.
 * Listen on provided port, on all network interfaces.
 */

const server = app.listen(PORT, () => {
  const { address, port } = server.address();
  log.info(`AG API server listening at ${address}:${port}`);
});

module.exports = server;
