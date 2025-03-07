import express from 'express';
import { 
    getTweets,
    getTweetById,
    createTweet
} from '../../controllers/tweetescontroller.js';
import { tweetzodschema } from '../../avalidators/tweetzodschema.js';
import { validate } from '../../avalidators/zodvalidator.js';

const router = express.Router();

// Define routes with proper middleware
router.get('/', getTweets);
router.get('/:id', getTweetById);
router.post('/', validate(tweetzodschema), createTweet);

// Remove duplicate route
// router.get('/:id1', (req, res) => {
//   return res.json({ id: 1 });
// });

export default router;