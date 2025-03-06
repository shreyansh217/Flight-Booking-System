const CrudRepository =require('./crud-repository');

const {Airplane}=require('../models/index');
const { Model } = require('sequelize');



class  AirplaneRepository extends CrudRepository{


    constructor(){
        super(Airplane);

    }
 
}

module.exports=AirplaneRepository;



