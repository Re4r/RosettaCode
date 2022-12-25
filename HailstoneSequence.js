function hailStoneSequence(limit) {
    function hailStone(n) {
        const seq = [n];
        while (n > 1) {
            n = n % 2 ? 3 * n + 1 : n / 2;
            seq.push(n);
        }
        return seq;
    };

    let n = 0;
    let max = 0;
    for (let i = limit; i--;) {
        const seq = hailStone(i);
        const sLen = seq.length;

        if (sLen > max) {
            n = i;
            max = sLen;
        }
    }
    return [n, max];
};

console.log(hailStoneSequence(50000));