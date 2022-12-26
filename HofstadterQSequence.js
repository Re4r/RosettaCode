const Q = Array(2500).fill(0);
Q[1] = 1;
Q[2] = 1;

function hofstaderQ(n) {
    if (!n || n < 1) {
        return 'integer';
    } else if (Q[n]) {
        return Q[n];
    } else {
        return Q[n] = hofstaderQ(n - hofstaderQ(n - 1)) + hofstaderQ(n - hofstaderQ(n - 2));
    }
};

console.log(hofstaderQ(1000));