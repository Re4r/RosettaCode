function entropy(s) {
    function process(s, evaluator) {
        let h = Object.create(null);
        let k;
        s.split('').forEach((c) => h[c] && h[c]++ || (h[c] = 1));
        if (evaluator) {
            for (k in h) {
                evaluator(k, h[k]);
            }
        }
        return h;
    };
    
    let sum = 0;
    let len = s.length;
    process(s, (k, f) => {
        const p = f / len;
        sum -= p * Math.log(p) / Math.log(2);
    });
    return sum;
};

console.log(entropy("0123456789abcdef"));