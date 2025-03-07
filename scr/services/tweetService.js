import {Filter} from 'bad-words'
import { createTweet as createTweetRepository } from '../repository/tweetRepository.js';
export const createTweet = async ({ body }) => {
  //  in this we put the  blocked word  if  come the block words  then  do not create  tweet body
  // block  words  hum utils  se bana   sate hai 
  //  in this   have  oure  business logice 


  //  make the filter  for the bad  words 
  const filter = new Filter();
  if (filter.isProfane(body)) {
    console.log(body)
    console.log(filter.clean(body))
    console.log("tweet is contain bad  words")
  }


  const tweet = await createTweetRepository({ body })

  //   whateer tweet became  return
  return tweet
}
//   service  layer is call by controller layer