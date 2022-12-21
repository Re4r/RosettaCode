function dotProduct(ary1, ary2) {
    let dotProd = 0;
    for (let i = 0; i < ary1.length; i++) {
        dotProd += ary1[i] * ary2[i];
    }
    return dotProd;
};

console.log(dotProduct([1, 3, -5], [4, -2, -1]));