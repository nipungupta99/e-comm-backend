const { Schema, model} = require("mongoose");
const UserSchema = new Schema({
  name: String,
  userImage: String,
  email: String,
  password: String,
  phone: Number,
});

module.exports = model("User", UserSchema);