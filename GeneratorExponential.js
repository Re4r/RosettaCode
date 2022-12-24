function exponentialGenerator(n) {
    const firstNumbers = [];

    for (let i = 2; firstNumbers.length < n; i++) {
        if (!Number.isInteger(Math.cbrt(Math.pow(i, 2)))) {
            firstNumbers.push(Math.pow(i, 2));
        }
    }
    return firstNumbers[n - 1];
};

console.log(exponentialGenerator(10));