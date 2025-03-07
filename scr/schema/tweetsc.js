import mongoose from "mongoose";

//  make a tweet schema object
const tweetSchema = new mongoose.Schema({
  //  pass one object and define what inside must have
  body: {
    //  with this not make any tweet
    type: String, // Change to String
    required: true,
    trim: true, // Remove white space from the beginning and end of the string
    maxlength: 280 // this is the max length of the tweet
  }
});

const Tweet = mongoose.model('Tweet', tweetSchema); // tweet collection
export default Tweet;
//  we perform queries in the repository layer