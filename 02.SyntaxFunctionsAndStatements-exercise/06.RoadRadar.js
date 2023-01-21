function RoadRadar(speed, area){
    let limit;
    if(area === 'motorway') limit = 130;
    else if(area === 'interstate') limit = 90;
    else if(area === 'city') limit = 50;
    else limit = 20;

    let overLimit = speed-limit;

    let status;
    if(overLimit > 0 && overLimit <= 20) status = 'speeding';
    else if(overLimit > 0 && overLimit <= 40) status = 'excessive speeding';
    else if(overLimit > 0) status = 'reckless driving';

    if(overLimit <= 0) console.log(`Driving ${speed} km/h in a ${limit} zone`);
    else console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${limit} - ${status}`);

}