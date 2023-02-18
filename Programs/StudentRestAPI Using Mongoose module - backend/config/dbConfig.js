let mongoose = require("mongoose");     //load the modules 
let url ="mongodb://database/mean_batch1";   // url 
mongoose.set('strictQuery', true);      // warning to avoid 
let dbConnection = mongoose.connect(url).then(result=>console.log("connected")).catch(error=>console.log(error));

module.exports=dbConnection;
