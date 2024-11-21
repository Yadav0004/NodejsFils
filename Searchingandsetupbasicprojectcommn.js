//  function linerSearch( arr,  val ){
//     for(var i=0;  i<arr.length; i++){
//          if(arr[i]=== val){
//             return 1
//          }
//     }
//  return -1
//  }
// //   how to acces this logic in main .js 
// //  by common js modluing 
// module.exports = linerSearch;
function linerSearch(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return 1;
        }
    }
    return -1;
}

 function  binarySearch (arr,val ){
     let   left=0;
     let right=arr.lenght-1
     let middel= Math.floor((left+right)/2);
      while(arr[middel]===! val&& left <=right){
         if(val<arr[middel]){
            right=middel-1;

         } else{
            left=middel+1;
         }
          middel=Math.floor((left+right)/2)
      }
       return arr[middel]===val? middel: -1
 }

// Export the function for CommonJS
module.exports = {linerSearch, binarySearch} // this way to pass multiple function
//  module .exports=  linerSearch;  this is simple
//  aur simple tarike se keval  ak hi value or logic to export kar sate ho
