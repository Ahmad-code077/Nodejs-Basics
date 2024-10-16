const EventEmittor = require('events');

const custom = new EventEmittor();

custom.on('setter', () => {
  console.log('first emiter event');
});
custom.on('setter', () => {
  console.log('second emitter event found ');
});
custom.emit('setter');
