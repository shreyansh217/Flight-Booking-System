const CrudRepository =require('./crud-repository');

const {City}=require('../models/index');
const { Model } = require('sequelize');



class  CityRepository extends CrudRepository{


    constructor(){
        super(City);

    }
 
}

module.exports=CityRepository;



