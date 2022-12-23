function binom(n, k) {
    return factorial(n) / (factorial(n - k) * factorial(k));
};

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
};

console.log(binom(5, 3));