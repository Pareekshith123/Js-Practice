//  var string='priya riya supriya riya'
// var words=string.split(' ') 
//  var array=words.filter((item,index,arr)=>{
// return arr.indexOf(item)===index
//  })
//  console.log(array)

let string = "priya riya abhi sujata riya priya s"
let words = string.split(' ');
 
let finalArray=words.filter((item,index,arr)=>{
    return arr.indexOf(item)===index
})
console.log("final set ",finalArray);
