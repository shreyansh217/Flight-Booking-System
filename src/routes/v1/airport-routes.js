const express=require('express');


const {AirportController}=require('../../controllers')
// const {}=require('../..controllers');

const {AirportMiddlewares}=require('../../middlewares');
const router=express.Router();


// api/v1/airports post
router.post('/',
    AirportMiddlewares.validateCreateRequest,
    AirportController.createAirport);

    // api/v1/airports get
router.get('/',
    AirportController.getAirports);
    


router.get('/:id',AirportController.getAirport);

router.delete('/:id', AirportController.destroyAirport);



module.exports=router;


