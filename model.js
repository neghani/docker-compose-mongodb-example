const mongoose = require("mongoose");
const { userSchema, tweetSchema } = require("./schema");
const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = {
  User,
  Tweet,
};
