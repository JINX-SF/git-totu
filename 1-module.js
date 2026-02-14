const names = require('./secondFile');
console.log(names);
const sayHi = require('./thirdFile');
sayHi(names.john);
sayHi(names.sam);