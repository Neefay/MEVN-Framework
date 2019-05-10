const methods = require("./methods")

const routes_object = {
    entry: "user",
    prefix: "api",
    routes: [
        { request: "get", url: "/hi", method: methods.greetUser },
        { request: "get", url: "/new", method: methods.newUser },
    ]
}

module.exports = { routes_object }