function combinations(possibleNumbers, total) {
    let police = possibleNumbers.filter((x) => x % 2 === 0);
    console.log(police);
    let sanitation = possibleNumbers;
    console.log(sanitation);
    let fire = possibleNumbers;
    console.log(fire);

    const parts = [police, sanitation, fire];
    let result = parts.reduce((a, b) => a.reduce((r, v) => r.concat(b.map((w) => [].concat(v, w))), []));
    console.log(result);

    const sums = result.filter((x) => x.reduce((a, b) => a + b, 0) === total);
    const sums1 = sums.filter((x) => x[1] !== x[2]);

    return sums1;
        
};

console.log(combinations([1, 2, 3, 4, 5, 6, 7], 12));