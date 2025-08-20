function confirmLastCharecter(str,char){
    // return str.substr(-char.length)===char
    return str.endsWith(char)
}
console.log(confirmLastCharecter('priya','ya'))



