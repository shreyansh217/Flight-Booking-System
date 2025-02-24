const {ServerConfig, Logger}=require('./config');

const express=require('express');
const apiRoutes=require('./routes')
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.use('/api', apiRoutes);



app.listen(ServerConfig.PORT, ()=>{
    console.log(`successfully started the server on port`);
    Logger.info("succesfully started server, ", "root", {});
})
