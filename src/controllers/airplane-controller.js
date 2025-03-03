const { response } = require('express');
const {AirplaneService}=require('../services');
const {StatusCodes}=require('http-status-codes');

const {SuccessResponse, ErrorResponse}=require('../utils/common');

// post req {modelnumber : airbus 320 , capcity : 200}
async function createAirplane(req, res)
{
    try{
        console.log(req.body)
        // console.log("SG");
        const airplane=await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity: req.body.capacity
    
        });
        console.log("Tushar");
        SuccessResponse.data=airplane;
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
    createAirplane
}