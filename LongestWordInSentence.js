//    let string = "supriya is a masooooom good girl"
// let words= string.split(' ')
//    let longest="";
//    for( let word of words){
//     if(word.length>longest.length){
//         longest=word
//     }
//    }

//    console.log(`longest word in the given sentance is ${longest} and it's length is ${longest.length}`);
// let string = "supriya is a hahahahaha good girl"
// let longest=''
// let array=string.split(" ");

// for(let i=0; i<array.length;i++)
//     {
//         if(array[i].length>longest.length){
//             longest=array[i]
//         }
//     }
//     console.log(`longest word in the given sentance is ${longest} and it's length is ${longest.length}`);


// longest word witout for loop
//      var str = "Priya is a good girl and having hardworking skill"

// let word =str.split(' ').sort((a,b)=>{return b.length-a.length})

// console.log("word",word)
//  console.log(`longest word in the given sentance is ${word[0]} and it's length is ${word[0].length}`);


// longest common string  in array and using while loop
// let array=["go","google","gosh"]

// array.sort();

// let i=0;
// while(array[0].length>0 && array[0].charAt(i)===array[array.length-1].charAt(i) )
//      {
//           i++

// }
// console.log(array[0].substring(0,i))
//longest common string  in array and using Slice

// let array=["go","goi","google","gosh"]
// let i =0;
// let arr=array.sort();
// while(arr[0].length>0 && arr[0][i]===arr[arr.length-1][i]){
//      i++
// }
// console.log(arr[0].slice(0,i));


//Longest common string  using for loop 
let array=['google','gosh','go','g',]
function longestCommonPrefix(strs) {
    if (!strs.length) return '';
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
        }
    }
    return prefix;
}
console.log("longestCommonPrefix:",longestCommonPrefix(array));
// let arr =array.sort((a,b)=>{return a.length-b.length})
// let result=''
// for(let i=0;i<arr.length;i++){
//      if(arr[0][i]===arr[arr.length-1][i]){
//           result+=arr[0][i]
//      }
// }
// console.log("result",result);