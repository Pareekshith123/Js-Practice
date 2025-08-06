var string = "India is My Country"

function reverse(string){
let result =""
for(let i=string.length-1; i>=0;i--){
    result=result+string[i];
}

return result;
}
console.log('this is not in Build reverse:',reverse(string));