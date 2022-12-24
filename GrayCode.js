function grayCode(enc, number) {
    if (enc) {
        return number ^ (number >> 1); 
    } else {
        let n = number;
        while (number >>= 1) {
            n ^= number;
        }
        return n;
    }    
};

console.log(grayCode(true,177));