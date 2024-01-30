const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];

/**
 * indexOf(x): to get the index of x in the array
 * 
 * ==> if x is not include in array then it give -1
 */

console.log(friends.indexOf('gelam'));
console.log(friends.indexOf('moon'));


/**
 * indexOf(x, y): to get the index of x in the array after y-th element
 * or check from y-index element
 */
const nums = [1, 2, 2, 1, 3, 2, 4]
console.log(nums.indexOf(1, 4));
console.log(nums.indexOf(1, 3));