const mysql = require('../connected/mysql')
const pgsql = require('../connected/pgsql')
const redis = require('../connected/redis')

module.exports = [
    mysql,
    pgsql,
    redis
]