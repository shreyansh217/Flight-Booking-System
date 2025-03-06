const { StatusCodes } = require('http-status-codes');
const {Logger}=require('../config');
const AppError = require('../utils/errors/app-error');
// const {}

class CrudRepository{
    constructor(model)
    {
        this.model=model;

    }
    // console.log("GSGSG");
    async create(data)
    {
        try
        {
            console.log("hello");
            const response=await this.model.create(data);
            return response;
        }
        catch(error)
        {
            Logger.error('something went wrong in crud repo:create');
            throw error;
        }
    }

    async destroy(data)
    {
        try
        {
            const response=await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        }
        catch(error)
        {
            Logger.error('something went wrong in crud repo:destroy');
            throw error;
        }
    }

    async get(data)
    {
        try{
            const response=await this.model.findByPk(data);
            console.log("nosgslgjkg");
            if(!response)
            {
                console.log("SGSGSg");
                    throw new AppError('not able to find the resource',StatusCodes.NOT_FOUND);
            }
            return response;
        }
        catch(error)
        {
            Logger.error('something went wrong in the crud repo: get');
            throw error;
        }
    }
    async getAll()
    {
        try{
            // console.log("BSBSs");
            const response=await this.model.findAll();
            // console.log("hgsghiekg");
            return response;
        }
        catch(error)
        {
            Logger.error('something went wrong in the crud repo: get');
            throw error;
        }
    }
    async update(id, data)
    {
        try{
            const response=await this.model.update(data,{
                where :{
                    id: id 
                }
            });
            return response;
        }
        catch(error)
        {
            Logger.error('something went wrong in the crud repo: get');
            throw error;
        }
    }
}
module.exports=CrudRepository;