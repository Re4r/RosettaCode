function allEqual(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            return false;
        }
    }
    return true;
};

function azSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false;
        }
    }
    return true;
};

console.log(allEqual(["AA", "ACB", "BB", "CC"]));
console.log(azSorted(["AA", "ACB", "BB", "CC"]));