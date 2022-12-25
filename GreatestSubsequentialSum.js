function maximumSubSequence(population) {
    let greatestSum = 0;
    let greatestSeq = [];

    for (let i = 0; i < population.length; i++) {
        for (let j = i + 1; j <= population.length; j++ ) {
            const currentSum = population
                .slice(i, j)
                .reduce((a ,b) => a + b);

                if (currentSum > greatestSum) {
                    greatestSum = currentSum;
                    greatestSeq = population.slice(i, j);
                }
        }
    }
    return greatestSeq;
};

console.log(maximumSubSequence([ 1, 2, -1, 3, 10, -10 ]));