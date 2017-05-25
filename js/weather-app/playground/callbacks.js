console.log(`staring app..`);

var getUser = (id,callback)=>{
  var usr ={
    name : 'bhasker'
  };
  setTimeout(()=>{
    callback(usr);
  },0);
};

getUser(1,(usr1)=>{
  console.log(usr1);
});

console.log("finished");
