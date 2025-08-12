function isPrime(n){
let prime
for(let i=2; i<n/2; i++){
    if(n%i!==0){
        prime=true
    }
    else{
        prime=false;
    }
}
return prime;
}
console.log(isPrime(7));