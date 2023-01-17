function StringLength(word1, word2, word3){
    const totalLength = word1.length + word2.length + word3.length;
    const averageLength = totalLength/3;

    console.log(totalLength);
    console.log(Math.round(averageLength));
}