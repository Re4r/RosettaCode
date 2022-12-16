function solve24(numStr) {

    let nums = numStr.split('').map((elem) => [elem, '' + elem]);
    let answer = false;
    const ops = ['+', '-', '*', '/'];

    const recursive24 = (nums) => {
        if (nums.length === 1) {
            if (nums[0][0] === 24) {
                answer = nums[0][1];
            }
        }
        return;
    };

    for (let x = 0; x < nums.length; x++) {
        for (let j = 0; j < ops.length; j++) {
            for (let k = 0; k < nums.length; k++) {
                if (k === x) {
                    continue
                }
                const newArr = nums.slice().filter((val, index) => {
                    if (index === k || index === x) {
                        return false;
                    }
                    return true;
                });
                let exp = nums[x][1] + ops[j] + nums[k][1];
                if (j <= 1 && newArr.length > 0) {
                    exp = '(' + exp + ')';
                }
                let val = eval(exp);
                newArr.push([val, exp]);
                recursive24(newArr);
            }
        }
    }
    recursive24(nums);
    console.log(nums);
    if (answer === false) {
        return 'no solution exist';
    }
    return answer;

};

console.log(solve24('1234'));