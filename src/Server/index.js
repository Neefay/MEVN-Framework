require('dotenv').config()

const   { resolve } = require('path'),
        express = require('express'),
        PORT = process.env.PORT,
        app = express(),

        publicPath = resolve(__dirname, '../../dist'),
        staticConf = { maxAge: '1y', etag: false }

require('./app')(app)
app.use(express.static(publicPath, staticConf))

app.listen(PORT, () => console.log("SERVER:", `API endpoints ready on port ${PORT}.`))