import Tweet from '../schema/tweetsc.js';

export const createTweet = async ({ body }) => {
  try {
    const tweet = await Tweet.create({ body });
    return tweet;
  } catch (error) {
    console.error('Repository error:', error);
    throw error;
  }
};

//  this is used to get all data from MongoDB
export const getTweets = async () => {
  try {
    const tweets = await Tweet.find();
    return tweets;
  } catch (error) {
    throw error;
  }
};

//  this is used for getting a specific tweet by ID
export const getTweet = async (tweetId) => {
  try {
    const tweet = await Tweet.findById(tweetId);
    return tweet;
  } catch (error) {
    throw error;
  }
};