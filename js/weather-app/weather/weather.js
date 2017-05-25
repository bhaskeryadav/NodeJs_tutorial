const req = require('request');

var getWeather = (latitude,longitude,callback) =>{
  req({
    url : `https://api.darksky.net/forecast/fffb4b51eb0da396d5d6c4dc381072e7/${encodeURIComponent(latitude+","+longitude)}`,
    json : true
  },(err,res,body)=>{
    if(!err && res.statusCode === 200){
      callback(undefined , {
        temperature : body.currently.temperature,
        apparentTemperature : body.currently.apparentTemperature
      });
    }else{
      callback("unable to fetch weaather");
    }
  });
}

module.exports = {
  getWeather
};
