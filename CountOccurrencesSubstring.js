function countSubtring(str, subStr) {
    return (str.length - str.replaceAll(subStr, '').length) / subStr.length;   
};

console.log(countSubtring("the three truths", "th"));