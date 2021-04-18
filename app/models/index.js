const { DB, USER, PASSWORD, HOST, dialect, pool } = require('../config/db.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(DB, USER, 
    PASSWORD, {
    host: HOST,
    dialect,
    operatorsAliases: false,
    pool: {
        max: pool.max,
        min: pool.min,
        acquire: pool.acquire,
        idle: pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require('./tutorial.model.js')(sequelize, Sequelize);

module.exports = db;