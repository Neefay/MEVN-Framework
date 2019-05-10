
const   express = require('express'),
        path = require('path'),
        bodyParser = require('body-parser'),
        morgan = require('morgan'),
        cors = require('cors'),
        routes = require('./Config/routes'),
        db = require('./Config/db')

module.exports = app => {
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json({ limit: '1mb' }))

    app.use(cors())
    app.use(morgan('dev'))

    routes.setup(app)
    db().then(() => console.log("Connected to the database."));
}
