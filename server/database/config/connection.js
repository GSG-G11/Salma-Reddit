const { Pool } = require('pg');
require('env2')('.env');

let dbUrl = '';

if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.TEST_DB_URL;
} else if (process.env.NODE_ENV === 'production') {
  dbUrl = process.env.DATABASE_URL_PRO;
} else {
  dbUrl = process.env.DEV_DB_URL;
}

const option = {
  connectionString: dbUrl,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
};

const connection = new Pool(option);

module.exports = connection;
