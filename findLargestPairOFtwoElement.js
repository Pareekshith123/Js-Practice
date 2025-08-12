
function largestPairSumofTwo(arr){
    let art=arr.sort((a,b)=>b-a)
    console.log(art);
    let sum = arr[0]+arr[1]
    return sum
}
const result = largestPairSumofTwo([9,7,8,4,5,6,1,2,3])
console.log(result)