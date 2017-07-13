const mongoose = require('mongoose');
const log = require('winston');
const Promise = require('bluebird');
const env = require('./env');

mongoose.Promise = Promise;

if (env.node_env !== 'production') mongoose.set('debug', true);

mongoose.connect(env.mongo_uri, { useMongoClient: true });

const db = mongoose.connection;

db.on('error', err => log.error('Connection error:', err.message));
db.once('open', () => log.info('Connected to MongoDB'));

module.exports = mongoose;
