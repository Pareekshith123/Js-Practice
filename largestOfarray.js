// function largestOfArray(str){
// var max=[];
// for(let i =0;i<str.length;i++){
//     var tempMax=str[i][0]
//     for(let j=0;j<str[i].length;j++){
//      var currentEle=str[i][j]
//       if(currentEle>=tempMax){
//         tempMax=currentEle;
//       }


//     }
//     max.push(tempMax);

// }
// return max;
// }
// console.log("array: ",largestOfArray([[1,2,3,4],[5,6,7,9],[45,76,2,1],[89,90,87,9]]));
function largestOfArray(str){
   var max=[0,0,0,0]
for(let i =0;i<str.length;i++){
 
    for(let j=0;j<str[i].length;j++){

      if(str[i][j]>=max[i]){
      max[i]=str[i][j]
      }


    }
   

}
return max;
}
console.log("array: ",largestOfArray([[1,2,3,4],[5,6,7,9],[45,76,2,1],[89,90,87,9]]));


