let nums = [1, 2, 3, 2, 3, 4, 5, 6, 3, 5];

function isSmall(value) {
    return value < 3;
}

let smallNums = nums.filter(isSmall);

console.log(smallNums);