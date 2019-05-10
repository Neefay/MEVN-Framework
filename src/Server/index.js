require('dotenv').config()

const   http = require('http'),
        express = require('express'),
        app = express()

require('./app')(app, express)

http.createServer(app).listen(app.get('port'), () => console.log(`API endpoints ready on port ${app.get('port')}.`))