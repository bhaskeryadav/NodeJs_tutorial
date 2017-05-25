console.log("staring..");

setTimeout(()=>{
  console.log("callback 2 secs.");
},2000);

setTimeout(()=>{
  console.log("zero sec");
},0);

console.log("finished.");
