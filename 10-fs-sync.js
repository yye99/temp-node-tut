const {readFileSync,writeFileSync, write} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

// console.log(first,second);

// if file is not there, node will create the file 
// if there, node will overwrite the file

writeFileSync(
    './content/result-sync-.txt', 
    `Here is the result : ${first}, ${second}`,
);

console.log('done with this task');
console.log('starting the next one');