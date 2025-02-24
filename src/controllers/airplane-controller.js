const { response } = require('express');
const {AirplaneService}=require('../services');
const {StatusCodes}=require('http-status-codes');

// post req {modelnumber : airbus 320 , capcity : 200}
async function createAirplane(req, res)
{
    try{
        console.log(req.body)
        const airplane=await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res.
                    status(StatusCodes.CREATED)
                   .json({
                    success: true,
                    message: 'successfully create and airplane',
                    data: response, 
                    error:{}
                   })
    }catch(error){
        return res
                   .status(StatusCodes.INTERNAL_SERVER_ERROR)
                   .json({
                    success:false, 
                    message:'something went wrong while creating airplane',
                    data:{},
                    error:error
                   });
    }
}
module.exports={
    createAirplane
}