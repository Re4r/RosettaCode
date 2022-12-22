function equlibrium(a) {
    let n = a.length;
    const l = [];
    const r = [];
    const e = [];

    l[0] = a[0];
    r[n - 1] = a[n - 1];
    
    for (let i = 1; i < n; i++) {
        l[i] = l[i - 1] + a[i];
        r[n - i - 1] = r[n - i] + a[n - i - 1];
    }
    for (let i = 0; i < n; i++) {
        if (l[i] === r[i]) e.push(i)
    }
    return e;
};

console.log(equlibrium([-7, 1, 5, 2, -4, 3, 0]));

