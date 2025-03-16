const express=require('express');


const {FlightController}=require('../../controllers')
// const {}=require('../..controllers');

const {FlightMiddlewares}=require('../../middlewares');
const router=express.Router();


// console.log("Sgsg");
// api/v1/flight post
router.post('/',
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight);



router.get('/', FlightController.getAllFlights);



    // trips=MUM-DEL GETr.get('/',FlightController.createFlight);

    // api/v1/airplane get
// router.get('/',
//     AirplaneController.getAirplanes);
    


// router.get('/:id',AirplaneController.getAirplane);

// router.delete('/:id', AirplaneController.destroyAirplane)


module.exports=router;


