const mongoose = require("mongoose");
const connectionString = "mongodb://localhost:27017/";
const models = require("./model");
const User = models.User;
const Tweet = models.Tweet;
mongoose.connect(connectionString, () => {
  run();
});
async function run() {
  // const newUser = new User({
  //   userName: "Ganesh",
  //   passWord: "password",
  //   email:'email@gmail.com'
  // });
  // const res = await newUser.save();
  // console.log(newUser);
  // const res = await User.find({});
  // const newTweet = new Tweet({
  //   text: "new Tweet heyeeee",
  //   userId: "62c1137ebdd79e6a84ee4758",
  // });

  // const res = await newTweet.save();
  // const res = await Tweet.find({}).populate('userId');
  

  // const res = await User.
  // console.log(res);
  // console.log("connected");
}
