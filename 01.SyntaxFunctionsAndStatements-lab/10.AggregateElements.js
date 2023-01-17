function AggregateElements(elements){
    const sum = elements.reduce((a, b) => Number(a) + Number(b));
    const sumInverseValues = elements.reduce((a, b) => Number(a) + 1 / Number(b), 0);
    const concat = elements.join('');

    console.log(sum)
    console.log(sumInverseValues)
    console.log(concat)
}