function greatestCommonDivisor(a, b) {
    return b === 0 ? a : greatestCommonDivisor(b, a % b);
};

console.log(greatestCommonDivisor(24,36));