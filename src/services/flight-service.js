const { StatusCodes } = require('http-status-codes');
const {FlightRepository}=require('../repositories');
const {CrudRepository}=require('../repositories');
const AppError = require('../utils/errors/app-error');

const flightRepository=new FlightRepository();

async function createFlight(data)
{
    try{
        // console.log(data+"SGSGSg");
        console.log("shgsglkjskg");
        const flight= await flightRepository.create(data);
        return flight;

    }catch(error){
        console.log("Eroor");
        console.log("got error", error);
        if(error.name=='SequelizeValidationError')
        {
            let explanation=[];
            error.errors.forEach((err) => {
                explanation.push(err.message);

            });
            console.log(explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
            
        }
        throw new AppError('cannot create a new fligh object ', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

// getAllFlights
// getAllFlights

async function getAllFlights(query)
{
    customFilter={};
    // mumbai to delhi
    if(query.trips)
    {
       [departureAirportID,arrivalAirportID]=trips.split("-");
       customFilter.departureAirportID=departureAirportID;
       customFilter.arrivalAirportID=arrivalAirportID;
    //    add a check they are not same 
    }
    console.log(customFilter);
    try{
        const flights=await flightRepository.getAllFlights(customFilter);
        return flights;

    }
    catch(error)
    {
        throw new AppError('cannot fetch data of all the flights ', StatusCodes.INTERNAL_SERVER_ERROR)
    }

}


module.exports={
    createFlight, 
    getAllFlights
}
