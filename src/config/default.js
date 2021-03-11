'use strict';

const path = require('path');

const defaultConfig = {
    app: {
        port: 3025
    },
    db: {
        logging: true,
        dialect: 'mysql',
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
    }
};

module.exports = defaultConfig;