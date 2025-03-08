const {ServerConfig}=require('./config');

const express=require('express');
const apiRoutes=require('./routes');
const city = require('./models/city');
const app=express();
exports.app = app;

app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`successfully started the server on port`);
    // Logger.info("succesfully started server, ", "root", {});
    const { City, Airport } = require('./models');
   
    await City.destroy({
        where:{
            id:1    
        }
    })


});




