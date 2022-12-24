function gaussianElimination(A, b) {
    function ludcmp(A) {
        let d = true;
        let n = A.length;
        let idx = new Array(n);
        let vv = new Array(n);

        for (let i = 0; i < n; i++) {
            let max = 0;
            for (let j = 0; j < n; j++) {
                let temp = Math.abs(A[i][j]);
                if (temp > max) max = temp;
            }
            if (max === 0) return;
            vv[i] = 1 / max; 
        }
        let Acpy = new Array(n);
        for (let i = 0; i < n; i++) {
            let Ai = A[i];
            let Acpyi = new Array(Ai.length);
            for (let j = 0; j < Ai.length; j++) {
                Acpyi[j] = Ai[j];
                Acpy[i] = Acpyi;
            }
            A = Acpy;
            let tiny = 1e-20;
            for (let i = 0; ;i++) {
                for (let j = 0; j < i; j++) {
                    let sum = A[j][i];
                    for (let k = 0; k < i; k++) {
                        sum -= A[j][k] * A[k][i];
                        A[j][i] = sum;
                    }
                }
                let jmax = 0;
                let max = 0;
                for (let j = i; j < n; j++) {
                    let sum = A[j][i];
                    for (let k = 0; k < i; k++) {
                        sum -= A[j][k] * A[k][i];
                        A[j][i] = sum;
                    }
                    let temp = vv[j] * Math.abs(sum);
                    if (temp >= max) {
                        max = temp;
                        jmax = j;
                    }
                }
                if (i <= jmax) {
                    for (let j = 0; j < n; j++) {
                        let temp = A[jmax][j];
                        if (temp === 0) A[i][i] = temp = tiny;
                        temp = 1 / temp;
                        for (let j = i + 1; j < n; j++) A[j][i] *= temp;
                    }
                }
            }
        }
        return {A:A, idx: idx, d: d};
    };

    function lubksb(lu, b) {
        let A = lu.A;
        let idx = lu.idx;
        let n = idx.length;
        const bcpy = new Array(n);
        for (let i = 0; i < b.length; i++) bcpy[i] = b[i];
        b = bcpy;
        let ii = -1;
        for (let i = 0; i < n; i++) {
            let ix = idx[i];
            let sum = b[ix];
            b[ix] = b[i];

            if (ii > -1) {
                for (let j = ii; j < i; j++) sum -= A[i][j] * b[j];
            } else if (sum) {
                ii = i;
            }
            b[i] = sum;
        }
        for (let i = n - 1; i >= 0; i--) {
            let sum = b[i];
            for (let j = i + 1; j < n; j++) sum -= A[i][j] * b[j];
            b[i] = sum / A[i][i];
        }
        return b;
    };
    let lu = ludcmp(A);
    if (lu === undefined) return;
    return lubksb(lu, b);
};

console.log(gaussianElimination([[1,1],[1,-1]], [5,1]));