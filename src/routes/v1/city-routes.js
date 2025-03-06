const express=require('express');


const {CityController}=require('../../controllers')
// const {}=require('../..controllers');
const {CityMiddlewares}=require('../../middlewares')

// const {AirplaneMiddlewares}=require('../../middlewares');
const router=express.Router();


// api/v1/cities post
router.post('/',
    CityMiddlewares.validateCreateRequest,
    CityController.createCity);




module.exports=router;


