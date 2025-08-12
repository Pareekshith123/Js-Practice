// function sortArray(arr){
// arr.sort()
// return arr
// }
//without sort
function sortArray(arr){
let finalArray=arr.sort((a,b)=> {return a-b})
return arr
}
console.log(sortArray([1,23,34,2,76,78]));