function eulersMethod(x1, y1, x2, h) {
    const cooling = (y) => -0.07 * (y - 20);

    let x = x1;
    let y = y1;

    while ((x < x2 && x1 < x2) || (x > x2 && x1 > x2)) {
        y += h * cooling(y);
        x += h;
    }
    return y;
};

console.log(eulersMethod(0, 100, 100, 2));