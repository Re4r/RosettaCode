function factorsOfInteger(num) {
    return Array
        .from(Array(num + 1), (v, i) => i)
        .filter((i) => num % i === 0);
};

console.log(factorsOfInteger(45));