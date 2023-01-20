function SameNumbers(number){
    let sum = 0;
    let areTheSame = true;

    let lastDigit = number%10;

    while(number > 0){
        sum += number%10;
        if(number%10 !== lastDigit) areTheSame = false;
        number = Math.floor(number/=10);
    }

    console.log(areTheSame);
    console.log(sum);
}
