const fs = require('fs');
console.log('start');
const first = fs.readFileSync('./content/first.txt', 'utf-8');
const second = fs.readFileSync('./content/second.txt', 'utf-8');
console.log(first);
console.log(second);

fs.writeFileSync(
  './content/thirdResult.txt',
  `this is the result created by node for ${first} , ${second}`
);

console.log('end ');

// This is the blocking code for the synchronous operations
