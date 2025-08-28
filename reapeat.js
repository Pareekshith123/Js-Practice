// function repeatNum(str,num){
// if(num<1) return " "
// return str.repeat(num)
// }
function repeatNum(str,num){
    let final =''

if(num<1) return " "
if(num===1) return str

return str+repeatNum(str ,num-1)
}
// function repeatNum(str,num){
//     let final =''

// if(num<1) return " "
// for(let i=0;i<num;i++){
//     final=final+str
// }
// return final
// }



console.log(repeatNum("hi",4))