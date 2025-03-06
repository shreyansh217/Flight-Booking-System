const express=require('express');


const {AirplaneController}=require('../../controllers')
// const {}=require('../..controllers');

const {AirplaneMiddlewares}=require('../../middlewares');
const router=express.Router();


// api/v1/airplane post
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);

    // api/v1/airplane get
router.get('/',
    AirplaneController.getAirplanes);
    


router.get('/:id',AirplaneController.getAirplane);

router.delete('/:id', AirplaneController.destroyAirplane)


module.exports=router;


