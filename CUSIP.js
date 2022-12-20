function isCusip(s) {
    if (s.length !== 9) return false;
    let sum = 0;

    const ascii = (x) => x.charCodeAt(0);

    for (let i = 0; i < 7; i++) {
        let c = s.charCodeAt(i);
        console.log(c);
        let v;

        if (c >= ascii('0') && c <= ascii('9')) {
            v = c - 48;
        } else if (c >= ascii('A') && c <= ascii('Z')) {
            v = c - 64;
        } else if (c === ascii('*')) {
            v = 36;
        } else if (c === ascii('@')) {
            v = 37;
        } else if (c === ascii('#')) {
            v = 38;
        } else {
            return false;
        }
        if (i % 2 === 1) {
            v *= 2;
        }
        sum += Math.floor(v / 10) + v % 10;
    }   
    return s.charCodeAt(8) - 48 === (10 - (sum % 10)) % 10;
};

console.log(isCusip("68389X105"));