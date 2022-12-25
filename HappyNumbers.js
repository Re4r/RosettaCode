function happy(num) {
    let current_num = num;
    let current_digit;
    let sum_squares;
    const num_seen = [];

    while (current_num !== 1 && num_seen[current_num] !== true) {
        num_seen[current_num] = true;
        sum_squares = 0;
        while (current_num > 0) {
            current_digit = current_num % 10;
            sum_squares += current_digit * current_digit;
            current_num = (current_num - current_digit) / 10;
        }
        current_num = sum_squares;
    }
    return current_num === 1;
};

console.log(happy(7));