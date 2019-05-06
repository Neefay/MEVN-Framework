
const   bodyParser = require('body-parser'),
        morgan = require('morgan'),
        routes = require('./routes')

module.exports = app => {
    console.log("\n\n===========================\n");

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json({ limit: '1mb' }))

    app.use(morgan('dev'))

    routes.setup(app)
    console.log("Server initialized.");

    console.log("\n===========================\n\n ");
}
