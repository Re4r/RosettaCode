function getDPA(num) {
    let [deficient, perfect, abundant] = [0, 0, 0];

    for (let i = 1; i <= num; i++) {
        const sum = getSumOfFacts(i);
        if (sum < i) {
            deficient++;
        } else if (sum === i) {
            perfect++;
        } else {
            abundant++;
        }
    }
    return [deficient, perfect, abundant];
};

function getSumOfFacts(num) {
    let sum1 = 1;
    let upperBound = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= upperBound; i++) {
        if (num % i === 0) {
            sum1 += i;
            sum1 += num / i;
        }
    }
    if (upperBound === Math.sqrt(num)) {
        sum1 -= upperBound;
    }
    return sum1;
};

console.log(getDPA(10000));