const { response } = require('express');
const {AirportService}=require('../services');
const {StatusCodes}=require('http-status-codes');

const {SuccessResponse, ErrorResponse}=require('../utils/common');
const airplane = require('../models/airplane');
const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const city = require('../models/city');

// post req {modelnumber : airbus 320 , capcity : 200}
// /airport{name:'IGI', cityId:5 , code:'DEL'}

async function createAirport(req, res)
{
    try{
        console.log(req.body);
        console.log("SG");
        const airport=await AirportService.createAirport({
          name:req.body.name,
          code:req.body.code,
          address:req.body.address,
          cityId:req.body.cityId
    
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



async function getAirports(req, res){
    // console.log("SGSGSg");
    try{
       
        const airports=await AirportService.getAirports();
        SuccessResponse.data=airports;
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

async function getAirport(req, res){
    // console.log("SGSGSg");
    try{
       
        const airport=await AirportService.getAirport(req.params.id);
        SuccessResponse.data=airport;
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


async function destroyAirport(req, res){
    console.log("SGSGSg");
    try{
        console.log("delet");
        const response=await AirplaneService.destroyAirport(req.params.id);
        SuccessResponse.data=response;
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
    createAirport,
    getAirports, 
    getAirport,
    destroyAirport,
    
}