const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository}=require('../repositories');
const {CrudRepository}=require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository=new AirplaneRepository();

async function createAirplane(data)
{
    try{
        // console.log(data+"SGSGSg");
        // console.log()
        const airplane= await airplaneRepository.create(data);
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


async function getAirplanes()
{
    try{
        console.log("NOOO");
        const airplanes=await airplaneRepository.getAll();
        console.log("sGsgs");
        return airplanes;

    }
    catch(error)
    {
        throw new AppError('Cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR);

    }
}
async function getAirplane(id)
{
    try{
        console.log("NOOO");
        const airplane=await airplaneRepository.get(id);
        
        console.log("sGsgs");
        return airplane;

    }
    catch(error)
    {
        if(error.StatusCodes==StatusCodes.NOT_FOUND)
        {
            // console.log("loda bsdkl0");
            throw new AppError('airplane you requested is not present', error.StatusCodes);
        }
        throw new AppError('Cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR);

    }
}

async function destroyAirplane(id){
    try{
        console.log("SGGjksjgkjs");
        const response=await airplaneRepository.destroy(id);
        console.log("hglsjgijgkj"  );
        return response;
    }
    catch(error)
    {
        throw new AppError('Cannot fe', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}



module.exports={
    createAirplane,
    getAirplanes,
    destroyAirplane,
    getAirplane
}
