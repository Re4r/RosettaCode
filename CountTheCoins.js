function countCOins(cents) {
    const operands = [1, 5, 10, 25];
    const targetsLength = cents + 1;
    const operandsLength = operands.length;
    const t = [1];

    for (let i = 0; i < operandsLength; i++) {
        for (let j = 1; j < targetsLength; j++) {
            t[j] = t[j] ? t[j] : 0;
            t[j] += (j < operands[i]) ? 0 : t[j - operands[i]];
        }
    }
    return t[targetsLength - 1];
}

console.log(countCOins(10));