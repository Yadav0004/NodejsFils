//  make  new  api   new  router
import express from 'express';
/*import  twittesRouter from './v1/twittes.js'
 import commentRouter from './v1/comment.js'
   const router=express.Router() // crate  new  router 
    router.use('/twittes',twittesRouter) // if  th remaonging req url start with  /twittes. then  use  use the  twittesRrouter
// here register  comment  in ther api routes 
router.use('/comment',commentRouter) */

//  this is  use  for v1  ,/api after  not come  /twittes /  come v1 or v2
import v1Router from './v1/v1routes.js'
import v2Route from './v2/v2_route.js'
 const router=express.Router()
router.use('/v1',v1Router) // now use  v1  router 
router .use('/v2',v2Route)


    export default  router;
