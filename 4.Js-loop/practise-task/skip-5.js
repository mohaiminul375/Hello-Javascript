let num = 55;
while(num <= 85){
    num++;
    if(num % 2 !== 0){
        // console.log(num);
        if(num % 5 === 0){
            continue;
        }
        console.log(num);
    }
}