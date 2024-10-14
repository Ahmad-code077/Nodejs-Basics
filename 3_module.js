const names = require('./4_modules');
const sayHi = require('./5_utils');
const data = require('./6_alternative-Export');
const { sufiyan, john } = names;
console.log(data);
sayHi('susan');
sayHi(john);
sayHi(sufiyan);
