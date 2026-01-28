// function diffArrayElement(arr1,arr2){
//     let result=[];

//     for(let v=0; v<arr1.length;v++){
//             if(arr2.indexOf(arr1[v]) === -1
//         ){ result.push(arr1[v])}

//             }
//             for(let i=0;i<arr2.length;i++){
//                 if(arr1.indexOf(arr2[i])===-1){
//                     result.push(arr2[i])
//                 }
//             }
//             return result
// }

function diffArrayElement(arr1 , arr2){
    var combine =arr1.concat(arr2)
    let result= combine.filter((num)=>{
        if(arr1.indexOf(num)==-1 || arr2.indexOf(num)==-1) return num
    })
return result
}

console.log(diffArrayElement([1,2,3,4], [2,3,4,5])) 