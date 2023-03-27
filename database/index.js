const mongoose = require('mongoose');

const {dbHost, dbPass, dbName, dbUser, dbPort} = require('../app/config');

mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`);
const db = mongoose.connection;



module.exports = db;