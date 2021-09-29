const Pool = require('pg').Pool;

const pool = new Pool({
    user: "ulul",
    password: "canggih",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;