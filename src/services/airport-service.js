const { StatusCodes } = require('http-status-codes');
const {AirportRepository}=require('../repositories');
const {CrudRepository}=require('../repositories');
const AppError = require('../utils/errors/app-error');

const airportRepository=new AirportRepository();

async function createAirport(data)
{
    try{
        // console.log(data+"SGSGSg");
        console.log("shgsglkjskg");
        const airport= await airportRepository.create(data);
        return airport;

    }catch(error){
        console.log("Eroor");
        console.log("got error", error);
        if(error.name=='TypeError')
        {
            let explanation=[];
            error.errors.forEach((err) => {
                explanation.push(err.message);

            });
            console.log(explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
            
        }
        throw new AppError('cannot create a new Airport object ', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


async function getAirports()
{
    try{
        console.log("NOOO");
        const airplorts=await airportRepository.getAll();
        console.log("sGsgs");
        return airplorts;

    }
    catch(error)
    {
        throw new AppError('Cannot fetch data of all the airports',StatusCodes.INTERNAL_SERVER_ERROR);

    }
}
async function getAirport(id)
{
    try{
        console.log("NOOO");
        const airport=await airportRepository.get(id);
        
        console.log("sGsgs");
        return airport;

    }
    catch(error)
    {
        if(error.StatusCodes==StatusCodes.NOT_FOUND)
        {
            // console.log("loda bsdkl0");
            throw new AppError('airport you requested is not present', error.StatusCodes);
        }
        throw new AppError('Cannot fetch data of all the airport',StatusCodes.INTERNAL_SERVER_ERROR);

    }
}

async function destroyAirport(id){
    try{
        console.log("SGGjksjgkjs");
        const response=await airportRepository.destroy(id);
        console.log("hglsjgijgkj"  );
        return response;
    }
    catch(error)
    {
        throw new AppError('Cannot destory  airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}



module.exports={
    createAirport,
    getAirports,
    destroyAirport,
    getAirport,
}
