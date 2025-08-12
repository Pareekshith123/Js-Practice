// function fibonacci(number){
// let n1=0
// let n2 =1
// let n3=0;
// let arr=[0,1];



// if(number>1){
    
// for(let i=1 ;i<number;i++){

// n3=n1+n2;
// arr.push(n3);
// n1=n2;
// n2=n3;

// }
// }


// return arr.join(',')
// }

// console.log('fibonacci:',fibonacci(6));

// function listFibonacci(n) {
// var arr = [0, 1]
//   for (var  i = 1; i < n; i++) 
//     arr.push(arr[i] + arr[i - 1])

//   return arr
// }
// console.log(listFibonacci(4))

function listFibonacci(n) {
var arr = [0, 1]
  for (var  i = 0; i < n; i++) 
    arr.push(arr[i] + arr[i + 1])

  return arr
}

console.log(listFibonacci(4))
const a = 'Three Hundred Million';
// output 3 00 000 000