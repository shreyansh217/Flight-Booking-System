const { response } = require('express');
const {AirplaneService}=require('../services');
const {StatusCodes}=require('http-status-codes');

const {SuccessResponse, ErrorResponse}=require('../utils/common');
const airplane = require('../models/airplane');
const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

// post req {modelnumber : airbus 320 , capcity : 200}
async function createAirplane(req, res)
{
    try{
        console.log(req.body);
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



async function getAirplanes(req, res){
    // console.log("SGSGSg");
    try{
       
        const airplanes=await AirplaneService.getAirplanes();
        SuccessResponse.data=airplanes;
        console.log("HEllo");
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error=error;
        return res
                .status(error.StatusCodes)
                .json(ErrorResponse);
    }
}

async function getAirplane(req, res){
    // console.log("SGSGSg");
    try{
       
        const airplanes=await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data=airplanes;
        console.log("HEllo");
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error=error;
        return res
                .status(error.StatusCodes)
                .json(ErrorResponse);
    }
}


async function destroyAirplane(req, res){
    console.log("SGSGSg");
    try{
        console.log("delet");
        const airplanes=await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data=airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error=error;
        return res
                .status(error.StatusCodes)
                .json(ErrorResponse);
    }
}



module.exports={
    createAirplane,
    getAirplanes, 
    getAirplane,
    destroyAirplane,
    
}