import express from 'express';
import { validate } from '../../avalidators/zodvalidator.js';
import { tweetSchema } from '../../avalidators/zodvalidator.js';
import { getTweets, getTweetById, createTweet } from '../../controllers/tweetescontroller.js';

const router = express.Router();

router.get('/', getTweets);
router.get('/:id', getTweetById);
router.post('/', validate(tweetSchema), createTweet);

export default router;