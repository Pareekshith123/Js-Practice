var numMix =['a','1','a','2','1','a']

let unique= numMix.filter((item ,index,arr)=>{
    return arr.indexOf(item)===index
})
console.log("unique values :",unique);