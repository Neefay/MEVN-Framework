
const   bodyParser = require('body-parser'),
        morgan = require('morgan'),
        routes = require('./routes'),
        db = require('./db')

module.exports = app => {
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json({ limit: '1mb' }))

    app.use(morgan('dev'))

    routes.setup(app)
    db().then(() => console.log("Connected to the database."));
}
