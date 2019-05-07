
const UserModel = require("./model").User

const greetUser = (req, res) => {
    res.send("Hi there man! It works!");
}

const newUser = (req, res) => {
    const name = "Ian";

    new UserModel({ name }).save((err, data) => {
        if (err) { console.error(err); return res.send(err) };
        res.json(data);
    });
}

const getUser = (req, res) => {
    UserModel
        .findOne({ name: "Ian" })
        .exec((err, data) => {
            res.json(data);
        });
}

module.exports = {
    greetUser,
    newUser,
    getUser
}