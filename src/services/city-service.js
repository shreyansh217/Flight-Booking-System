const { StatusCodes } = require('http-status-codes');
const {CityRepository}=require('../repositories');
// const {CrudRepository}=require('../repositories');
const AppError = require('../utils/errors/app-error');


const cityRepository=new CityRepository();

async function createCity(data)
{
    try{
        // console.log(data+"SGSGSg");
        console.log("sgskgjkg");
        const city= await cityRepository.create(data);
        return city;

    }catch(error){
      console.log("got error", error);


        // if(error.name=='SequelizeUniqueConstraintError')
        // {
            
        // }
        if(error.name=='TypeError'||error.name=='SequelizeUniqueConstraintError')
        {
            let explanation=[];
            error.errors.forEach((err) => {
                explanation.push(err.message);

            });
            console.log(explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
            
        }
        throw new AppError('cannot create a new city object ', StatusCodes.INTERNAL_SERVER_ERROR)
    }

}


module.exports=
{
    createCity

}