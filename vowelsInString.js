let vowels=['a','e','i','o','u']


let string = "kgihhheoiioioi"
let uniqueStr = [...new Set(string.toLowerCase())].join('');
console.log("unique",uniqueStr)
let count =0;

for(var letter of uniqueStr){
if(vowels.includes(letter)){
count++
console.log(letter)
}
}

console.log("count is:",count);