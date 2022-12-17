function getSumOfFacts(num) {
    let sum = 1;
    let upperBound = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= upperBound; i++) {
        if (num % i === 0) {
            sum += i;
            sum += num / i;
        }
    }
    if (upperBound === Math.sqrt(num)) {
        sum -= upperBound;
    }
    return sum;
};

function getAmicablePairValueInBound(a, bound) {
    const sumA = getSumOfFacts(a);
    if (sumA !== a && sumA <= bound && getSumOfFacts(sumA) === a) {
        return [true, sumA];
    }
    return [false, 0];
};

function amicablePairsUpTo(maxNum) {
    const amicablePairs = [];
    for (let i = 1; i < maxNum; i++) {
        const [hasPair, pairValue] = getAmicablePairValueInBound(i, maxNum);
        if (hasPair && pairValue > i) {
            amicablePairs.push([i, pairValue]);
        }
    }
    return amicablePairs;
};

console.log(amicablePairsUpTo(20000));