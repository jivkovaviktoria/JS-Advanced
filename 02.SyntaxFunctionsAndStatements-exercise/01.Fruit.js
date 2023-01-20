function CalculatePrice(type, weight, pricePerKg){
    let pricePerGr = pricePerKg/1000;
    let total = weight*pricePerGr;

    console.log(`I need $${total.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${type}.`);
}