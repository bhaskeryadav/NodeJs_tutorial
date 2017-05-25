const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
              .options({
                a:{
                  demand : true,
                  alias : 'address',
                  describe : 'address for weather',
                  string : true
                }
              })
              .help()
              .alias('help','h')
              .argv;

geocode.getGeocode(argv.a,(err,res)=>{
  if(err){
    console.log(err);
  }else{
    weather.getWeather(res.latitude,res.longitude,(errMsg,data)=>{
      if(errMsg){
        console.log(errMsg);
      }else{
        console.log(`Temperature at ${res.address} is ${data.temperature}. Feels like ${data.apparentTemperature}`);
      }
    });
  }
});
