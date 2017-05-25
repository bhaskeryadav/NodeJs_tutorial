// var somePromise = new Promise((resolve,reject)=>{
//   console.log("resolving msg.");
//   //resolve('Resolved');
//   reject('rejected promise');
//   console.log("resolved msg");
//   resolve('Resolved again');
// });
//
// somePromise.then((msg)=>{
//   console.log(msg);
// },(erMsg)=>{
//   console.log(erMsg);
// });

var somePromiseInput = (data) => new Promise((resolve,reject)=>{
  console.log(data);
  resolve("Hi.")
});

somePromiseInput("input").then((msg)=>{
  console.log(msg);
});
