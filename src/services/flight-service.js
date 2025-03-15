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




module.exports={
    createFlight
}
