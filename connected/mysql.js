const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'db001',
  database: 'node_docker'
})

module.exports = connection;
