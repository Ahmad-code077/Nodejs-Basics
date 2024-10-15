const { error } = require('console');
const { readFile, writeFile } = require('fs');
console.log('starting');
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf-8', (err, res) => {
    if (err) {
      return;
    }
    const second = res;
    writeFile(
      './content/result-async.txt',
      `this is the result created by node for ${first} , ${second}`,
      (err, res) => {
        if (err) {
          return;
        }
        console.log('the result is going to be here ');
      }
    );
  });
});
console.log('end');
