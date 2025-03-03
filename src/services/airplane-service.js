const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository}=require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository=new AirplaneRepository();

async function createAirplane(data)
{
    try{
        console.log(data+"SGSGSg");
        // console.log()
        const airplane= await AirplaneRepository.create(data);
        return airplane;

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
        throw new AppError('cannot create a new Airplane object ', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports={
    createAirplane
}
