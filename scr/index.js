import express, { application, response } from 'express'
import morgan from 'morgan'
import { PORT } from './config/serverconfig.js';
import apirouter from './routes/apiRoutes.js'
import connectDB  from './config/dbConfing.js';

const app = express();

// Add body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//    configure exprejs  for the add templete engine
console.log(import.meta)
app.set('view engine','ejs')
app.set('views', import.meta.dirname + '/views')

app.use(morgan('combined'))

// app.set('views')
app.use(express.text())
// now access request  body 

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
     })
})

app.all('*',(req,res)=>{  // this is  execute when  not match nay query 
   return res.status(404).json({ // this is  chnage also status code 
      message:" message is not fount "
   })
})

app.listen(PORT,()=>{
   console.log(` server  is  Start  on the prot ${PORT}` )
   connectDB()
})