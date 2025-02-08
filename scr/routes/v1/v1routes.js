//  it is set  the version 
 import express from 'express';
import twittesRouter from './twittes.js'
import commentRouter from './comment.js'
 const router=express.Router()



//  afer register in the apiRoute  v1Routes  then in v1Routes   use  twittes.js
 router.use('/twittes',twittesRouter)  // if  th remaonging req url start with  /twittes. then  use  use the  twittesRrouter
 // here register  comment  in ther api routes
 // these  both  comment .js   and twittes.js use in the  apiRouter  befro v1route  now it  use  for the version  in v1 file 

 router.use('/comment', commentRouter)

export default router // here i want if  request start  with /api the  go  on /api
//  and   will define what come  after  /api  in the  file apiRoutes.js