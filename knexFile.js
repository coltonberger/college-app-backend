'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/college_db',
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/college_db',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
