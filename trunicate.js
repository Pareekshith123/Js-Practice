function trunicateString(str ,num){
if(num<=3) return str.slice(0,num)+"..."
    return str.slice(0,num-3)+"..."
}
console.log(trunicateString("par",3));