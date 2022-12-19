function quibble(words) {
    let newWords = [];
    const len = words.length;
    console.log(len);
    if (len === 1) {
        newWords = [...words];
        console.log(newWords);
    } else if (len > 1) {
        if (len > 2) {
            newWords = words.slice(0, -2).map((word) => word + ',');
            console.log(newWords);
        }
        newWords.push(words.slice(len - 2, len - 1));
        newWords.push(' and ');
        newWords.push(words.slice(len - 1));
    }
    newWords.push('}');
    newWords.unshift('{');
    console.log(newWords)

    return newWords.join('');
};

console.log(quibble(["ABC", "DEF", "G", "H"]));