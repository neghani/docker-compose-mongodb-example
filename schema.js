const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  street: String,
  zip: { type: String, required: true },
});

const userSchema = mongoose.Schema({
  name: String,
  dob: Date,
  gender: String,
  email: { type: String, unique: true, required: true },
  userName: { type: String, unique: true, required: true },
  passWord: { type: String, required: true },
  age: Number,
//   address: addressSchema,
  createdAt: Date,
  updatedAt: Date,
  lastUpdatedBy: String,
});

const tweetSchema = mongoose.Schema({
  text: String,
  userId: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
});

module.exports.userSchema = userSchema;
module.exports.tweetSchema = tweetSchema;
