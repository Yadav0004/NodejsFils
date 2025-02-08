import express from 'express';
import twitttesRouter from './twittes.js'
 const router=express.Router()
 

 router.use('/twittes',twitttesRouter)



export default router // here i want if  request start  with /api the  go  on /api
//  and 