 import express, { application, response } from 'express'
    import morgan from 'morgan'
  const app=express(); 
 app.use(morgan('combined'))
  app.use(express.json()) // this is  conver in coming data in  json formate
  app.use(express.text())
  app.use(express.urlencoded()) // now access request  body 
//  function mid(req,res,next){
//     console.log('mid')
//       next()  
//  }
//   function  mid2(req,res,next){ 
//      console.log('mid2')
//      next()
//   }

//   function  mid3(req,res,next){ 
//     console.log('mid3')
//     next()
//  }

//    function  commonmiddleware( req,res, next){
//        console.log("  commonmiddleware ")
//         next()
//    }
//     app.use(commonmiddleware)


 app.get('/ping',(req,res)=>{ 
   
     return res.json({
         message:'this',
         id:'1',
         "second":'2'


     }),
      app.post('/home',(req,res)=>{ //  post  browser  par  run  nag= hi hoga 
         console.log(req.query) //query param
          //this is    use  for access query   and will use  filtreation related data  whne  need
          console.log(req.body)
          //  if we want  add our  senstive data in  save place   then go in body in bost many  write your  data in json and  here access request
         //   but request  body  not access  this  solve buy ural encoded  then access
         // why this  happe  in request  happen   besuce  in request body   send data me way  in JSON Js  and other  thing 
         // how to  i dentifiy  what the text   or  json  exprees
         // serilized or desirilized  use 
          // then express say  what   you send data  just  telme and  if not want bout  which  format  you  send  data 
          // if  he got the  r encoded and  make useable and  and which  you  use it 
         return res.json({
             message:" this s my  name "
         })
      })
 })