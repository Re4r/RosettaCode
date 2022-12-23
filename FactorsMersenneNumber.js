function check_mersene(p) {
    function isPrime(value) {
        for (let i = 2; i < value; i++) {
            if (value % i === 0) return false; else return true;
        }
    };

    function trial_factor(base, exp, mod) {
        let squre = 1;
        let bits = exp.toString(2).split('');
        let ln = bits.length;
        for (let i = 0; i < ln; i++) {
            squre = Math.pow(squre, 2) * (bits[i] === 1 ? base : 1) % mod;
        }
        return (squre === 1);
    };

    function mersenne_factor(p) {
        let limit = Math.sqrt(Math.pow(2, p) - 1);
        let k = 1;
        while ((2 * k * p - 1) < limit) {
            let q = 2 * k * p + 1;
            if (isPrime(q) && (q % 8 === 1 || q % 8 === 7) && trial_factor(2, p, q)) {
                return q;
            }
            k++;
        }
        return null;
    };

    let f = mersenne_factor(p);
    let result = 'M' + p + ' = 2^' + p + '-1 is ';
    result += f === null ? 'prime' : 'composite with factor' + f;

    return result;
};

console.log(check_mersene(3));