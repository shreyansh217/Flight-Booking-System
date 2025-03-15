const CrudRepository =require('./crud-repository');

const {Airport}=require('../models/index');
// const { Model } = require('sequelize');



class  AirportRepository extends CrudRepository{


    constructor(){
        super(Airport);

    }
 
}

module.exports=AirportRepository;



