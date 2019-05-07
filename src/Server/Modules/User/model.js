const   mongoose = require("mongoose"),
        Schema = mongoose.Schema

const   UserSchema = new Schema({ name: { type: String, required: true } }),
        User = mongoose.model("User", UserSchema);

module.exports = { User }