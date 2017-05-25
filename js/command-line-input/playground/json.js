var obj = {
  name : 'Bhasker'
};

var strng = JSON.stringify(obj);

console.log(strng);
console.log(obj);

var personStr = '{"name":"sachin","100s":51}';
var person = JSON.parse(personStr);
console.log(typeof person);
