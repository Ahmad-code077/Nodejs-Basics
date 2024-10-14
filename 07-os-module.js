const os = require('os');
// console.log(os);

// const user = os.userInfo();
// console.log(user);

console.log(`the pc is running since ${os.uptime()} seconds`);

const objectOs = {
  name: os.type(),
  release: os.release(),
  memory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(objectOs);
