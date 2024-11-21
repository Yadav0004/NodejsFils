 export function  binarySearch (arr,val ){
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