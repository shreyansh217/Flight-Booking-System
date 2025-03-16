const CrudRepository =require('./crud-repository');

const {Flight}=require('../models/index');
// const { Model } = require('sequelize');



class  FlightRepository extends CrudRepository{


    constructor(){
        super(Flight);

    }
    async getAllFlights(filter)
    {
        const respone=await Flight.findAll({
            where:filter

        });
        return respone;

    }
}

module.exports=FlightRepository;



