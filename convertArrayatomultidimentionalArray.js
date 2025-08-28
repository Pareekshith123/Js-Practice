function convertArray(arr,size){
    var group=[]
    while(arr.length>0){
        group.push(arr.slice(0,size));
        arr=arr.slice(size)
    }
    return group;
}
console.log(convertArray(['a','b','c','d'],1));