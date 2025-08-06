
function letterOccurence(string,letter){
    let count=0;
    for(let i=0;i<string.length-1;i++){
        if(string.charAt(i)===letter){
        count++;
        }
    }
    return `${letter} is repeated ${count} times`
}
console.log(letterOccurence("pribkjhlpppya" ,"p"));