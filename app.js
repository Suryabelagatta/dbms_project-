// Import the MySQL connection pool
const pool = require('./db'); // Assuming db.js is in the same directory

// Example query
pool.query('SELECT * FROM DEPT where dname="HR"', (error, results, fields) => {
    if (error) {
        console.error('Error executing query:', error);
        return;
    }
    console.log('Query results:', results);
});