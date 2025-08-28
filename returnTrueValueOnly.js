function removeFalseValue(arr){
var tueValue=[]
return arr.filter((item)=>{return item})

// for(let item of arr){
//     if(item) tueValue.push(item)
// }
// return tueValue;
}
console.log(removeFalseValue(["priya", 0 ,"", false, null,undefined, "ate", NaN ,9 ]));