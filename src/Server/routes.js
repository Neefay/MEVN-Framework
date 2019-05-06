exports.setup = app => {
    const express = require('express');
    require("./load.js").mountAllRoutes(app, express);
}