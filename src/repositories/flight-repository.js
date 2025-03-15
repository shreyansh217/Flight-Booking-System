const CrudRepository =require('./crud-repository');

const {Flight}=require('../models/index');
// const { Model } = require('sequelize');



class  FlightRepository extends CrudRepository{


    constructor(){
        super(Flight);

    }
 
}

module.exports=FlightRepository;



