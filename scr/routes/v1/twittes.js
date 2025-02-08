import express from 'express'
import { gettweets,gettweetsID ,poasttweet } from '../../controllers/tweetescontroller.js'
 const  router=express.Router() // create  new  router 











 /*router.get('/',(req,res)=>{ //   and  will be run when any  on  get request  on localhost:3000/tweet then run 
   this  is also behave like  controller  becuse  it  run  after / 
     return res.json({
        messsage:"route active "
     })
 }) */

//   now   here  can i add  tweetescontroller and after  this  in routtin layer have only routing  layer  logice  not  controller . controller  logice have won  file 
router.get('/',gettweets)
router.get('/:id',gettweetsID )
 router.post('/po',poasttweet)

   router.get('/:id1',( req,res)=>{
     return res.json({
         id:1
     })
   })
 export default router; 