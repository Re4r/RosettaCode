const R = [null, 1];
const S = [null, 2];

function extendHofStaterSequence(n) {
    let current = Math.max(R[R.length - 1], S[S.length - 1]);
    while (R.length <= n || S.length <= n) {
        let i = Math.min(R.length, S.length) - 1;
        current++;
        if (current === R[i] + S[i]) {
            R.push(current);
        } else {
            S.push(current);
        }
    }
};

function ffr(n) {
    extendHofStaterSequence(n);
    return R[n];
};

console.log(ffr(10));