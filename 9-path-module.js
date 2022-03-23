const path = require('path');

console.log(path.sep);      // return forward slash

const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);


// provid an absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);

