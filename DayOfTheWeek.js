function findXmasSunday(start, end) {
    const sundayYears = [];

    for (let i = start; i <= end; i++) {
        if (new Date(i, 12, 25).getDay() === 0) {
            sundayYears.push(i);
        }
    }
    return sundayYears;
};

console.log(findXmasSunday(1970, 2017));