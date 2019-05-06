const methods = require("./methods")

const routes_object = {
    entry: "group",
    api: true,
    routes: [
        { request: "get", url: "/hi", method: methods.greetUser }
    ]
}

module.exports = { routes_object }