 /*import express, { response } from 'express'
//  Create  a  new  Express   app/Sever  object
  const app=express(); 

//    how to  define  get  if   any body  is  do  /ping  :-  and  what do  in  this   it  is the define in the callback  it will take  two paramter 
//  here  we can do in request  seprete  seprate function  it  call by express 
//   in function  fullfill these   response  responability  to express
//   req is define what is  in coming  request
//   res  is define what  server  send reponse
//  make middleware  function  of  lerarng  about  middleware ware
 function mid(req,res,next){
    console.log('mid')
      next()  // this  next have access of the get  function 
 }
  function  mid2(req,res,next){ // mid 2  ka acees  mid1  ke next me hai  and  mid2 next() paramete  have  get acces
     console.log('mid2')
     next()
  }

  function  mid3(req,res,next){ 
    console.log('mid3')
    next()
 }

   function  commonmiddleware( req,res, next){
       console.log("  commonmiddleware ")
        next()
   }
    app.use(commonmiddleware)
//  this is  execute all  request dont matter what


//   const  middle=[mid, mid2, mid3] this  also  can you in   get define  middleware
 app.get('/ping',[mid,mid2,mid3],(req,res)=>{ // when add the  mid  then  it will  be   make  middleware
     return res.json({
        //   whatever  you define  in side it will return   as  json 
         message:'this',
         id:'1',
         "second":'2'


     }),
      app.post('/home',(req,res)=>{
         return res.json({
             message:" this s my  name "
         })
      })

 })
//   Define  a  route   handler  for the  default home  page 
   app.listen(3000,()=>{
      console.log(" server  is  Start  on the prot  3000 ")
   })

   // first complet  commonmiddleware  then  mid , mid2 , mid3 then  all function  get post all execute
 */



   //  morga  npm  i  this execute all mid  function  execute  some  common function 
   import express, { application, response } from 'express'
   
    import morgan from 'morgan'
import { PORT } from './config/serverconfig.js';
import apirouter from './routes/apiRoutes.js'

  const app=express();  
//    configure exprejs  for the add templete engine
 console.log(import.meta)
app. set('view engine','ejs')
app.set('views', import.meta.dirname + '/views')

// app.set('views')
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


//  this is  use   for  router and also  another use of the  .use()
// app. use('/twittes',twittesRouter);
 app.use('/api',apirouter) // when   the req url start with /api , use the api router
 //if not start then run  all  below request






//  for templet engine  anybody get  request  on /
app.get('/',(req,res)=>{
   res.render('index',{name:'jone Doe'})
})


 app.get('/ping',(req,res)=>{ 
   
     return res.json({
         message:'this',
         id:'1',
         "second":'2'


     })})
     /*
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
 })*/
 /*app.get('/twitte/:twwe_id/commet/:commt_if',(req,res)=>{
    console.log(req.params)//url params
    return res.json({
       message:" this is mu"
    })
 })*/
 app.all('*',(req,res)=>{  // this is  execute when  not match nay query 
   return res.status(404).json({ // this is  chnage also status code 
      message:" message is not fount "
   })
 })
   app.listen(PORT,()=>{
      console.log(` server  is  Start  on the prot ${PORT}` )
   })