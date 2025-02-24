const express=require('express');


const {AirplaneController}=require('../../controllers')
// const {}=require('../..controllers');
const router=express.Router();


// api/v1/airplane post
router.post('/', AirplaneController.createAirplane);

module.exports=router;


