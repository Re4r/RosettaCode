function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

function fibonacci2(n) {
    const fibArr = new Array(n + 2);

    fibArr[0] = 0;
    fibArr[1] = 1;

    for (let i = 2; i <= n; i++ ) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    return fibArr[n];
};

console.log(fibonacci(3));
console.log(fibonacci2(10));