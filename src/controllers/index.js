// const { app } = require('..');
// const { ServerConfig } = require('../config');

module.exports={
    InfoController: require('./info-controller'),
    AirplaneController:require('./airplane-controller'), 
    CityController:require('./city-controller'),
    AirportController:require('./airport-controller'),
    FlightController:require('./flight-controller')

};
// app.listen(ServerConfig.PORT, async () => {
//     console.log(`successfully started the server on port`);
//     // Logger.info("succesfully started server, ", "root", {});
    // const { City, Airport } = require('./models');
//     // const bengaluru= await City.findByPk(1);
//     // console.log(bengaluru);
//     // const kampegoda=await bengaluru.create({name : 'kampegoda Airport', code:'BLR'});
//     // console.log(kampegoda);
//     // const hbairport= await Airport.findbyPk(3);
//     // console.log(hbairport);
    // const city = await City.findByPk(1);
    // console.log(city);
//     await city.crea;


// });
