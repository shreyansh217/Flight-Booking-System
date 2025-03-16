const { response } = require('express');
const {FlightService}=require('../services');
const {StatusCodes}=require('http-status-codes');

const {SuccessResponse, ErrorResponse}=require('../utils/common');
const airplane = require('../models/airplane');
const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const city = require('../models/city');
const { getAllFlights } = require('../services/flight-service');

// post flights
// {

// flightNumber,
// airplaneID,
// departureAirportID,
// arrivalAirportID,
// arrivalTime,
// departureTime,
// price,
// boardingGate,
// totalSeats

// }
// /airport{name:'IGI', cityId:5 , code:'DEL'}

async function createFlight(req, res)
{
    try{
        console.log(req.body);
        console.log("SG");
        const flight=await FlightService.createFlight({
            flightNumber:req.body. flightNumber,
            airplaneID:req.body.airplaneID,
            departureAirportID:req.body.departureAirportID,
            arrivalAirportID:req.body.arrivalAirportID,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
            boardingGate:req.body.boardingGate,
            totalSeats:req.body.totalSeats
    
        });
        console.log("Tushar");
        SuccessResponse.data=flight;
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


async function getAllFlights(req, res)
{
    try{
        console.log(req.query);
        const flights=await FlightService.getAllFlights(req.query);
        SuccessResponse.data=flights;
        return res
                   .status(StatusCodes.CREATED)
                   .json(SuccessResponse);
    }
    catch(error)
    {
        console.log("noono");
        ErrorResponse.error=error
        return res
                   .status(StatusCodes.INTERNAL_SERVER_ERROR)
                   .json(ErrorResponse);

    }
}

module.exports={
    createFlight, 
    getAllFlights
    
}