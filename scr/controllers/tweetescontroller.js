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
    // Log incoming request
    console.log('Request received:', {
      body: req.body,
      validatedBody: req.validatedBody
    });

    const { body } = req.validatedBody || req.body;
    
    // Initialize bad words filter with custom configuration
    const filter = new Filter();
    
    // Add custom words to filter (optional)
    filter.addWords('customword1', 'customword2');
    
    // Check for profanity
    if (filter.isProfane(body)) {
      console.log('Profanity detected in:', body);
      return res.status(400).json({
        success: false,
        message: "Tweet contains inappropriate content"
      });
    }

    const response = await createTweetService({
      body: body
    });

    return res.status(201).json({
      success: true,
      data: response,
      message: "tweet created successfully"
    });
  } catch (error) {
    console.error('Controller error:', error);
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};