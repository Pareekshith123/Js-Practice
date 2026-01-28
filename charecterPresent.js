function characterPresent(arr){
let first = arr[0].toLowerCase();
let second =arr[1].toLowerCase();
for(let i=0; i<second.length;i++){
    if(first.indexOf(second)){
        return false;
    }
}
return true
}
console.log(characterPresent(["thello","the"]))