function genFIzzBuzz(rules, num) {
    let fizzBuzz = '';
    rules.forEach((rule) => {
        if (num % rule[0] === 0) fizzBuzz += rule[1];
    });
    return fizzBuzz || num.toString();
};

console.log(genFIzzBuzz([[3, "Buzz"],[5, "Fizz"]], 12));