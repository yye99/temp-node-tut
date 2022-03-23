// CommonJS, every file in node is module (by default)
// Modules - Encapsulated Code (only share mininmum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alt-flavor');


sayHi("eric");
sayHi(names.john);
sayHi(names.alex);

