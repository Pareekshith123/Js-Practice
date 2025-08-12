function findDuplicate(){
    let arr=[1,2,2,3,5,5]
    let data=[]
    for(let item of arr){
     if(data[item]===item){
     return data[item]
     }
     else{
        data[item]=item
     }

    }
    return -1
}

console.log("duplicate elements",findDuplicate());