function entropy(word) {
    function digitEntropy(count) {
        return count < 1 ? 0 : - count / word.length * Math.log2(count / word.length);
    };
    const numZeros = word.split('').filter((e) => e === '0').length;
    const numOnes = word.length - numZeros;

    return digitEntropy(numZeros) + digitEntropy(numOnes);
};

function fibWord(n) {
    return [...Array(n).keys()].reduce((words, i) => {
        const word = i === 0 ? '1' : i === 1 ? '0' : words[i - 1].Word + words[i - 2].Word;
        words.push({N: i + 1, Length: word.length, Entropy: entropy(word).toFixed(8), Word: word});

        return words;
    }, []);
};

console.log(fibWord(7));