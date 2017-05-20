const yargs = require('yargs');
const notes = require('./notes.js')

//console.log('process',process.argv);
//console.log('yargs',yargs.argv);
var yargv = yargs.argv;
var cmd = yargs.argv._[0];

if(cmd === 'add'){
notes.addNote(yargs.argv.title,yargs.argv.body);
}else if(cmd === 'remove'){
console.log('Removing note');
}else if(cmd === 'edit'){
console.log('Editing node');
}else if(cmd === 'getAll'){
  notes.getAll();
}else{
console.log('Not recognized');
}
