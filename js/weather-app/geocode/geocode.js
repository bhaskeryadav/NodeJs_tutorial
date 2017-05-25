const req = require('request');

var getGeocode = (address) =>new Promise((resolve,reject)=>{
  req({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
    json:true
  },(err,res,body)=>{

    if(err){
      reject("Unable to connect GOOGLE api.");
    }else if(body.status === "ZERO_RESULTS"){
      reject("no result found.");
    }else if(body.status === "OK"){
      resolve({
        address : body.results[0].formatted_address,
        latitude : body.results[0].geometry.location.lat,
        longitude : body.results[0].geometry.location.lng
      });
    }
  });
});

module.exports = {
  getGeocode
};
