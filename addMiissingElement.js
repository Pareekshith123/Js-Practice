function missingDigits(){
    let arr =[0,1,2]
    let miss=[]
    for(let i=0;i<=6;i++){
        if(arr.indexOf(i)==-1){
            arr.push(i)
            miss.push(i)
        }
    }
    console.log("arr",arr);
    console.log('miss',miss);
    return " "
}
console.log(missingDigits());
// function missingElement(){
//   var a = [1,2,5]
//   var missing = [];
//   for (var i = 1; i <= 6; i++) 
//    {
//     if (a.indexOf(i) == -1) 
//      {
//        missing.push(i); 
//      }
//    }
//  console.log(missing) 
//  console.log(a.concat(missing).sort()); 
// }
// function missing(arr) {
//     var x = 0;
//     for (var i = 0; i < arr.length; i++) {
//         x = x + 1;
//         if (arr[i] != x) {
//             return(x); //9
//         }
//     }
// }
// missing([1, 2, 3, 4, 5, 6, 7, 8, 10])


// function missing(arr) {
//     for (var i = 0, x=1; i < arr.length; x++,i++) {
//         if (arr[i] != x) { //index value comparing with pointer
//             return x; //9
//         }
//     }
// }
// console.log(missing([1, 2, 3, 4, 5, 6, 7, 8, 10]))