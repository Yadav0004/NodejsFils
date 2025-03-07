//  now  carate validator  in this  for  tweets route
export  const createTweetManulaValidator=(req,res,next)=>{
    //  in ths  have access  to in comming  request
 if(!req.body.twittes){
     return res.status(400).json({
error:" tweet is requird"
// this is  validator  register  in route ths  becuse  route is execute or show  controller  and validator  it is behave like  service provider 
        
     });
 }

 if (req.body.twittes.length > 280){
    return res.status(400).json({
       error:"tweet is must be 280  chareter  or  less"
    })
    
}
 next()
}

// request body  me parameter  empty  aaya ya nahi  aaya to  400 return  othwise  call  next  middleware 
// creatweet define in the  controller 

//  if is tweet is 400 word is grater than 
