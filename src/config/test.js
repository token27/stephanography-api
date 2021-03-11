'use strict';

const testConfig = {
    app: {
        port: 3025
    },
    db: {
        logging: false,
        dialect: 'mysql',
        host: process.env.DATABASE_HOST || 'localhost',
        port: process.env.DATABASE_PORT || 33075,
        name: process.env.DATABASE_NAME || 'my_database',
        username: process.env.DATABASE_USER || 'my_database_user',
        password: process.env.DATABASE_PASSWORD || 'my_database_user_password'
    }
};

module.exports = testConfig;