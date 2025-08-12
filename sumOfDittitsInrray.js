
// function getSumPairZero(array){
//     for(let arr of array){
//         for(let i=0; i<array.length-1;i++){
//             if(arr +array[i]  ===  0){
//                 return ` this is ${[arr,array[i]]}`
//             }
//         }
//     }
// }



// const result = getSumPairZero([-5,-4,-3,-2,-1,0,1,2,3,4,5])
// console.log("result",result)
// function getSumPairZero(array){
//     for(let i=0; i<array.length-1;i++){
//         for(let j=0; j<array.length-1;j++){
//             if(array[i] +array[j]  ===  0){
//                 return ` this is ${[array[i],array[j]]}`
//             }
//         }
//     }
// }
function getSumPairZero(array){
    let left =0
    let right =array.length-1
    while(left<right){
        let sum=0
        sum =array[left]+ array[right]
     
      if(sum==0){
       return ` this is ${[array[left],array[right]]}` 
      }else if(sum < 0){
        right--;
      }else{
        left++
      }
    }
}


const result = getSumPairZero([-4,-3,-2,-1,0,1,-2,3,4])
console.log("result",result)