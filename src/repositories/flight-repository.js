const CrudRepository =require('./crud-repository');

const {Flight}=require('../models');
// const { Model } = require('sequelize');



class  FlightRepository extends CrudRepository{


    constructor(){
        super(Flight);

    }
    async getAllFlights(filter)
    {
        console.log("bksnbksnbsb");
        console.log(filter);
        const response=await Flight.findAll({
            // console.log("SGSgs");
            
            where:filter
        });
        console.log("bs,bmbmb");
        return response;

    }
}

module.exports=FlightRepository;



