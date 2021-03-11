'use strict';

const express = require('express');
const config = require('./config');
const app = express();

// Multilanguage
const i18n = require("i18n");
i18n.configure({
    locales: ['en', 'es'],
    defaultLocale: 'es',
    register: global,
    directory: __dirname + '/locales'
});

// Listen app
var server = app.listen(config.app.port, function () {
    console.log(i18n.__('App is active and listening on ') + `${config.app.port}`);
    console.log(i18n.__('Listening on ') + `${config.app.port}`);
});

app.get("/", (request, response) => {
    response.status(200).send("Silence is Golden.");
});

app.get("/encrypt", (request, response) => {
    if (request.query.format) {

        // Ok
        response.status(200).send({"message": "Image encrypted successfully."});
    } else {
        response.status(401).send({"message": "Format is required."});
    }
});

app.get("/decrypt", (request, response) => {
    if (request.query.password) {

        // Ok
        response.status(200).send({"message": "Image decrypted successfully."});
    } else {
        response.status(401).send({"message": "Password is required."});
    }
});

app.get("/error", (request, response) => {
    response.status(500).send({"message": "Something is wrong. Try again later."});
});

module.exports = server;