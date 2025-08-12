function uniqueElements(arr1,arr2){
    let arr= [...arr1,...arr2]
    let finalArray=[ ...new Set(arr)];
    arr.sort();
    console.log(finalArray);

}
uniqueElements([2,3,4,5,5,6],[2,2,3,3])
