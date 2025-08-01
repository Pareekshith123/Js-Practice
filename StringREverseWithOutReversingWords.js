 var string ="India is my country"
 function reverseLetters(string){
    const finalSentance=string.split('').reverse().join('').split(" ").reverse().join(" ");
    return finalSentance;

 }
 console.log("after reveresing::",reverseLetters(string));