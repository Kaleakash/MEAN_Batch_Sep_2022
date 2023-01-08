let mongoose = require("mongoose");     //load the modules 
let url ="mongodb://127.0.0.1:27017/mean_batch1";   // url 
mongoose.set('strictQuery', true);      // warning to avoid 
let dbConnection = mongoose.connect(url).then(result=>console.log("connected")).catch(error=>console.log(error));

module.exports=dbConnection;
