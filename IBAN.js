function isValid(iban) {
    if (iban.match(/\[^A-Z0-9]+/) ||
        iban[0].charCodeAt(0) < 'A'.charCodeAt(0) ||
        iban[0].charCodeAt(0) > 'Z'.charCodeAt(0) ||
        iban[1].charCodeAt(0) < 'A'.charCodeAt(0) ||
        iban[1].charCodeAt(0) > 'Z'.charCodeAt(0)) {
            return false;
        }

        let sections = iban.split(' ');
        sections.push(sections.shift());
        sections = sections
            .map((section) => section
                .split('')
                .map((char) => 
                    char.charCodeAt(0) >= 'A'.charCodeAt(0) &&
                    char.charCodeAt(0) <= 'Z'.charCodeAt(0) ?
                        char.charCodeAt(0) - 'A'.charCodeAt(0) + 10 : char)
                .join(''));     
                
    const num = sections.join('');
    return extendedMod(num, 97) === 1;            
};



function extendedMod(num, modulo) {
    const digits = num.split('');
    let currentDigits = [digits.splice(0, 9).join('')];
    while (digits.length > 0) {
        currentDigits = (parseInt(currentDigits) % modulo).toString();
        currentDigits += digits.splice(0, 7).join('');
    }
    return currentDigits % modulo;
};

console.log(isValid("GB82 WEST 1234 5698 7654 32"));
console.log(isValid("SA03 8000 0000 6080 1016 7519"));


