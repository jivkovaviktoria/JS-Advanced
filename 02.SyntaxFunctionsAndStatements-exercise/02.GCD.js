function GCD(num1, num2){
    let max = 1;
    for(let i = 0; i < Math.max(num1, num2); i++){
        if(num1%i === 0 && num2%i===0){
            if(i > max) max = i;
        }
    }

    console.log(max);
}