    var number = 3
    parseInt(number)
        if(number<0){
            console.log("Error! can not find factotrial of negative number");
        }
        else if(number===0){
            console.log(`factorial of ${number} is `+1);

        }else{
            let fact=1
        for(let i = 1;i<=number; i++){
            fact *=i;
        }
    console.log(`factorial of ${number} is `+fact);
        }