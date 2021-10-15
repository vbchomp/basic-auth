'use strict';

require('dotenv').config();
const server = require('./src/server.js');
const { db } = require('./src/auth/models/index.js');

// make sure our tables are created, start up the HTTP server.
db.sync()
  .then(() => {
   server.listen(3000, () => console.log('server up'));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });
