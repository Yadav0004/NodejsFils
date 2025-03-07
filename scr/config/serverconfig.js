import dotenv from 'dotenv';
dotenv.config(); // it will start reading your  enviroment  variable  file  .env file 

export const PORT = process.env.PORT || 3000;
export const MONGOURL=process.env.MONGOURL;
//   why   i export here  becuse i put all .confing()  all  varable that  why  export  together 