function isBalanced(str) {
    if (str === '') return true;

    str = str.split('');
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '[') {
            stack.push('[');
        } else if (str[i] === ']' && stack[stack.length - 1] === '[') {
            stack.pop();
        }
    }
    return stack.length === 0;
};

console.log(isBalanced("[]"));