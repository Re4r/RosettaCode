function eth_mult(a, b) {
    const halve = (n) => Math.floor(n / 2);
    const double = (n) => n + n;
    const isEven = (n) => n % 2 === 0;

    let [left, right] = [a, b].sort((a, b) => a - b);
    let total = isEven(left) ? 0 : right;
    
    while (left > 1) {
        left = halve(left);
        right = double(right);
        if (!isEven(left)) total += right;
    }
    return total;
};

console.log(eth_mult(17, 34));