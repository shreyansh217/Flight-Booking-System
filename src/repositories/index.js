// const AirplaneRepository = require("./airplane-repository");

const AirportRepository = require('./airport-repository');
const FlightRepository = require('./flight-repository');

module.exports={
    AirplaneRepository:require('./airplane-repository'),
    CityRepository:require('./city-repository'),
    AirportRepository:require('./airport-repository'),
    FlightRepository:require('./flight-repository')
}