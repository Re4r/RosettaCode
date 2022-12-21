function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
};

console.log(deepCopy({test: {test: 'test'}}));