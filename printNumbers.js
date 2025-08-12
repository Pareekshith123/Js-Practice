
for(let i=0; i<=100;i++){
    let flag=true;
    for(let j=0; j<i; j++){
    if(i%j===0){
        flag=false;
        break;
    }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
        //    document.write(i+ "</br>");
    }

}