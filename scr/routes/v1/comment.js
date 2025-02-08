import express from 'express'
 const  router=express.Router() // create  new  router 











 router.get('/',(req,res)=>{ //   and  will be run when any  on  get request  on localhost:300/commet then run 
 
     return res.json({
        messsage:" this  is  take the comment  route  "
     })
 })
   router.get('/:id',( req,res)=>{
     return res.json({
         id:1
     })
   })
 export default router; 