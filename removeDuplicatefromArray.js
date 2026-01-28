function removeDuplicate(arr1,arr2){
    let array =[...arr1,...arr2]
    let unique =[...new Set(array)]
    return unique
}
console.log(removeDuplicate([1,2,3,4],[2,3,4,5]));