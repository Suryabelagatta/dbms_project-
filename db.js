// Import mysql2 library
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Surya@2022',
    database: 'Agri'
});

// Export the pool for shared use in other modules
module.exports = pool;
