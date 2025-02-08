 export  const  gettweets = ((req,res)=>{
     return res.json({
        message:"Welcome  to  the tweets controller  route"
     })
 })
//   
 export const gettweetsID=((req,res)=>{
    return res.json ({
        message:" this is  controller   id  twittes"
    })
 })

 export const poasttweet=((req,res)=>{
    return res.json({
        message:" mai ak  controller   post hu "
    })
 })