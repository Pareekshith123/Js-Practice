let a="Army"
let b= "Mary"


let c=a.toLowerCase().split('').sort().join('')
let d=b.toLowerCase().split('').sort().join('')
if(c===d){
    console.log("True");
    
}else{
    console.log('Not an Anagram');
}