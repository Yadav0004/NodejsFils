// //  this is  the  genrice  validator  file 
// export const  validite=(schema)=>{
//     //  this is  ruturn  one function becuse befor  you  pass  middleware  and  then take a function  that is the  reasion behind  make  function 
//     // it will return  validating middleware 
//  return async(req,res,next)=>{
//     try{
//          console.log(req.body)
//          schema.parse(req.body); // this  is not validate  with schema   if not  found  the go  next ()
//       next()
//     }
//     catch (error){
// return res.status(400).json({
//     error:error.errors,
//     success:false,
//     message:" validation failed"
// })
//     }
//  }
// }
import { z } from 'zod';

export const validate = (schema) => async (req, res, next) => {
  try {
    // Log raw request
    console.log('Raw request body:', req.body);
    
    // Ensure body exists
    if (!req.body) {
      return res.status(400).json({
        success: false,
        error: [{ message: 'Request body is missing' }]
      });
    }

    const validatedData = await schema.parseAsync(req.body);
    req.validatedBody = validatedData;
    
    // Log validated data
    console.log('Validated data:', validatedData);
    
    next();
  } catch (error) {
    console.error('Validation error:', error);
    return res.status(400).json({
      success: false,
      error: error.errors || [{ message: 'Validation failed' }]
    });
  }
};