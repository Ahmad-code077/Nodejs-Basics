const { readFile, writeFile } = require('fs').promises;
// const utils = require('util');

// const readFilePromise = utils.promisify(readFile);
// const writeFilePromise = utils.promisify(writeFile);
const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf-8');
    const second = await readFile('./content/second.txt', 'utf-8');
    await writeFile(
      './content/Awesome.txt',
      `This is Awesome we can create with easy way ${first} ,  ${second}`
    );
    const awesome = await readFile('./content/Awesome.txt', 'utf-8');
    console.log(awesome);
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();

// const getReadFile = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (err, res) => {
//       if (err) {
//         reject(err);
//       }

//       resolve(res);
//     });
//   });
// };

// getReadFile('./content/second.txt')
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
