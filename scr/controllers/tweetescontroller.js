import { date } from 'zod';
import { Filter } from 'bad-words';  // Changed from 'import Filter' to 'import { Filter }'
import { createTweet as createTweetService } from '../services/tweetService.js';

export const getTweets = (req, res) => {
  return res.json({
      message: 'Welcome to the tweet route'
  });
}

export const getTweetById = (req, res) => {
  return res.json({
      message: 'Welcome to the tweet route',
      id: req.params.id
  });
}

export const createTweet = async (req, res) => {
  try {
    console.log('Validated body:', req.validatedBody);
    const { body } = req.validatedBody;
    
    // Initialize bad words filter
    const filter = new Filter();
    filter.addWords('customword1', 'customword2');
    
    // Handle array of tweets
    if (Array.isArray(body)) {
      const tweets = [];
      for (const tweet of body) {
        if (filter.isProfane(tweet)) {
          return res.status(400).json({
            success: false,
            message: `Inappropriate content detected: ${tweet}`
          });
        }
        const created = await createTweetService({ body: tweet });
        tweets.push(created);
      }
      return res.status(201).json({
        success: true,
        data: tweets,
        message: 'Multiple tweets created successfully'
      });
    }
    
    // Handle single tweet
    if (filter.isProfane(body)) {
      return res.status(400).json({
        success: false,
        message: 'Inappropriate content detected'
      });
    }

    const tweet = await createTweetService({ body });
    return res.status(201).json({
      success: true,
      data: tweet,
      message: 'Tweet created successfully'
    });

  } catch (error) {
    console.error('Controller error:', error);
    return res.status(400).json({
      success: false,
      message: error.message || 'Failed to create tweet'
    });
  }
};