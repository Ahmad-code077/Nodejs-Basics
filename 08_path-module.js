const path = require('path');

console.log(path.sep);
const newPath = path.join('content', 'subfolder', 'root.txt');
console.log(newPath);

const base = path.basename(newPath);
console.log(base);
const resolve = path.resolve(__dirname, newPath);
console.log(resolve);
