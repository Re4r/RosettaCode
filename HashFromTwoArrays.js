function arrToObj(keys, values) {
    return keys.reduce((hash, key, index) => {
        hash[key] = values[index];
        return hash;
    }, {});
};

console.log(arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"]));