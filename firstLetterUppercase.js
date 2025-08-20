function firstLetterUppercase(string){
let words=string.toLowerCase().split(' ')
// for(let i=0;  i<words.length;i++){
//     words[i]=words[i][0].toUpperCase()+words[i].slice(1);
// }


//using map 
words=words.map((ele)=>{
    return ele[0].toUpperCase()+ele.slice(1);
})
return words.join(' ')
}
console.log(firstLetterUppercase(
    "i am pareekshith and i think i am a great person"
));