const numbers = [12, 87, 98, 45]

console.log(numbers);


// push: add new element at the end of the array
numbers.push(66);
console.log(numbers);

// add more than one element
numbers.push(2, 33, 3);
console.log(numbers);


// pop: delete last element from the array
numbers.pop();
console.log(numbers);

let last = numbers.pop();
console.log(numbers);