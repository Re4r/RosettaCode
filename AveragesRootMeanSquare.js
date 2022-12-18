function rms(arr) {
    const sumOfSquares = arr.reduce((s, x) => s + x * x, 0);
    return Math.sqrt(sumOfSquares / arr.length);
};

console.log(rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));