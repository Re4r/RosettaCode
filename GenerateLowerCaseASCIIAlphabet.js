function lascii(cFrom, cTo) {
    const letters = [];

    let codeFrom = cFrom.charCodeAt(0);
    let codeTo = cTo.charCodeAt(0);

    for (let i = codeFrom; i <= codeTo; i++) {
        letters.push(String.fromCharCode(i));
    }
    return letters;
};

console.log(lascii('m','q'));