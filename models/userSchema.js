const { Schema, model} = require("mongoose");
const UserSchema = new Schema({
  name: {
    type:String,
    required: true
  },
  userImage: String,
  email: {
    type:String,
    required: true
  },
  password: {
    type:String,
    required: true
  },
  phone: Number,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref:'Order'
    }
  ]
});

module.exports = model("User", UserSchema);