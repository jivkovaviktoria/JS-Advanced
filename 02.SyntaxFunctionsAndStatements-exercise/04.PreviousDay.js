function PreviousDay(year, month, day){
    let date = new Date(`${year}/${month}/${day}`);
    date.setDate(date.getDate() - 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}