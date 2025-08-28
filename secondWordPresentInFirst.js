function wordCheck(arr){
    var first=arr[0].toLowerCase()
    var second=arr[1].toLowerCase()
// for(let item of second){
//     if(!first.includes(item)){
//         return false
//     }
// }

//   for (var letter of second){
//     if(first.indexOf(letter)== -1){ 
//       return false
//     }
//   }


 for (var i=0; i<second.length; i++){
    if(!first.includes(second[i])){ //-1 means not found in array
      return false
    }
  }


return true
}
console.log(wordCheck(["hello","hp"]));