function LargestNumber(num1, num2, num3){
    let max = num1;
    if(num2 > max) max = num2;
    if(num3 > max) max = num3;

    console.log(`The largest number is ${max}.`);
}