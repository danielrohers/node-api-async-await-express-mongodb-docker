const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const log = require('winston');
const cors = require('cors');
const env = require('./config/env');

const app = express();

app.use(helmet());
app.use(cors());
app.use(logger(env.logger));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'doc')));

require('./config/bluebird');
require('./config/mongoose');
require('./config/routes')(app);

app.set('port', env.port);
app.listen(app.get('port'), () => log.info(`Express server worker listening on port ${app.get('port')}`));

module.exports = app;
