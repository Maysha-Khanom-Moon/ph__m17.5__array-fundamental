const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailar'];

console.log(friends);

// shift: 1st element ber kore
let first = friends.shift();
console.log(friends);
console.log(first);


// unshift: element add at first position
friends.unshift('moon');
console.log(friends);

// more than one
friends.unshift('mk', 'eva');
console.log(friends);