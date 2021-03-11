var Request = require('request');
const config = require('../src/config');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

describe("Server", () => {

    var server;

    beforeAll(() => {
        server = require("../src");
    });

    afterAll(() => {
        server.close();
    });

    describe("GET /", () => {

        var data = {};

        beforeAll((done) => {
            Request.get("http://localhost:" + config.app.port + "/", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });

        it("Status 200", () => {
            expect(data.status).toEqual(200);
        });

        it("Body", () => {
            expect(data.body).toBe("Silence is Golden.");
        });

    });

    describe("GET /encrypt", () => {

        var data = {};

        beforeAll((done) => {
            Request.get("http://localhost:" + config.app.port + "/encrypt/", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });

        it("Status 401", () => {
            expect(data.status).toBe(401);
        });

        it("Body", () => {
            expect(data.body.message).toBe("Format is required.");
        });

    });

    describe("GET /decrypt", () => {

        var data = {};

        beforeAll((done) => {
            Request.get("http://localhost:" + config.app.port + "/decrypt/", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });

        it("Status 401", () => {
            expect(data.status).toBe(401);
        });

        it("Body", () => {
            expect(data.body.message).toBe("Password is required.");
        });

    });


    describe("GET /error", () => {

        var data = {};

        beforeAll((done) => {
            Request.get("http://localhost:" + config.app.port + "/error/", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });

        it("Status 500", () => {
            expect(data.status).toBe(500);
        });

        it("Body", () => {
            expect(data.body.message).toBe("Something is wrong. Try again later.");
        });
    });


});