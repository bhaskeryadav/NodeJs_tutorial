console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

fs.appendFile('test.txt','Bhasker');
var usr = os.userInfo();

console.log(`Hello ${usr.username} !. Your age is ${notes.age}`);
console.log(notes.addNos(9,-2));
