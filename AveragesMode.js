const mode = function(arr) {
    const counter = {};
    let result = [];
    let max = 0;

    arr.forEach(element => {
        if (!(element in counter)) {
            counter[element] = 0;
        }
        counter[element]++;
        if (counter[element] === max) {
            result.push(element);
        } else if (counter[element] > max) {
            max = counter[element];
            result = [element];
        }
        console.log(counter);
        console.log(result);
    });
    
    
    return result;
};

console.log(mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17]));