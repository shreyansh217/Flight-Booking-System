const {SuccessResponse, ErrorResponse}=require('../utils/common');
const {CityService}=require('../services');
const {StatusCodes}=require('http-status-codes');



// post {name: 'landon'}
async function createCity(req, res)
{
    try{
        console.log(req.body);
        console.log("SG");
        const airplane=await CityService.createCity({
            name: req.body.name
    
        });
        console.log("Tushar");
        SuccessResponse.data=city;
        return res.
                    status(StatusCodes.CREATED)
                   .json(SuccessResponse)
    }catch(error){
        console.log("noono");
        ErrorResponse.error=error
        return res
                   .status(StatusCodes.INTERNAL_SERVER_ERROR)
                   .json(ErrorResponse);
    }
}

module.exports={
    createCity
}