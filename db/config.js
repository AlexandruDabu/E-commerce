const pg = require('pg');
require('dotenv').config();

const { Pool } = pg

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT

})


const query = (text, params) => {
    return pool.query(text, params)
        .catch(err => {
            console.error('Database query error:', err);
            throw err; // Re-throw the error to be handled elsewhere
        });
};

module.exports = query;