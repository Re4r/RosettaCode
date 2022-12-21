function Num(n) {
    if (typeof(n) !== 'number') {
        throw TypeError('Not a Number');
    }
    if (n < 1 || n > 10) {
        throw TypeError('Out of Range');
    }
    return new Number(n);
};

console.log(new Num(10));
console.log(new Num(3) / new Num(4));
