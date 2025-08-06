// var string= "anmnak"

// let arr=string.split('').reverse().join('');

// if(string===arr){
//     console.log(`${string} is a palindrome `);

// }else{
//     console.log(`${string} is not a palindrome`);

// }


//Palindrome check by dividing half

    let string="12321"
    let green=false;

    let len = string.length;
    for(let i=0; i<len/2; i++){

        if( string[i]!==string[len-1-i]){
            green=false
    
        }
        else{
        
    green=true;
    }

    
    }
    if(green){
    console.log(`${string} is  a palindrome`);
    }else{
    console.log(`${string} Not a palindrome `);
    }