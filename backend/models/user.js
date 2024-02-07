const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    default: 2,
  },
});


module.exports = mongoose.model("users", UserSchema);
