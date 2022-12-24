function fizzBuzz() {
    return Array(100)
        .fill(0)
        .map((_, index) => {
            const ordinal = index + 1;
            if (ordinal % 15 === 0) return 'FizzBuzz';
            if (ordinal % 3 === 0) return 'Fizz';
            if (ordinal % 5 === 0) return 'Buzz'; else return ordinal;
        });
};

console.log(fizzBuzz());



