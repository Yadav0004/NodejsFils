//__dirname
// console.log(__dirname)
// module  this is globale variable 
// console.log(module) // it will print module 
//  console.log(__filename)  //it will print curret file name 
// console.log(process)// this is vary close ti moduling system  and it wil help to  imprt 
// console.log(globle)

console.log(" hello ji ")
  function sum(  x, y){
      
         sum=x+y
         console.log(sum)
         return sum
  }
  
   setTimeout(()=>{
    console.log(" sum ab ayega")
    sum(10,20)
    
   } )
