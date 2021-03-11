'use strict';

const path = require('path');

const productionConfig = {
    app: {
        port: 3025
    },
    db: {
        logging: false,
        dialect: 'mysql',
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        name: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    }
};

module.exports = productionConfig;