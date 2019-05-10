require('dotenv').config()
const { resolve } = require('path')
const express = require('express')
const configureAPI = require('./app')
const app = express()

const { PORT = 8080 } = process.env

configureAPI(app)

const publicPath = resolve(__dirname, '../../dist')
const staticConf = { maxAge: '1y', etag: false }

console.log(publicPath);

app.use(express.static(publicPath, staticConf))

app.listen(PORT, () => console.log(`App running on port ${PORT}!`))