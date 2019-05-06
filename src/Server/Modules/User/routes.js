const methods = require("./methods")

const routes_object = {
    entry: "user",
    api: true,
    routes: [
        { request: "get", url: "/hi", method: methods.greetUser }
    ]
}

module.exports = { routes_object }